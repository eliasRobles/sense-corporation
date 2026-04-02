import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { CreateContactDto } from '../contact/dto/create-contact.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private graphClient: Client | null = null;

  constructor(private configService: ConfigService) {
    this.initializeGraphClient();
  }

  private initializeGraphClient() {
    const tenantId = this.configService.get<string>('MICROSOFT_TENANT_ID');
    const clientId = this.configService.get<string>('MICROSOFT_CLIENT_ID');
    const clientSecret = this.configService.get<string>(
      'MICROSOFT_CLIENT_SECRET',
    );

    if (!tenantId || !clientId || !clientSecret) {
      this.logger.warn(
        '⚠️  Microsoft 365 credentials not configured. Email service will log only.',
      );
      this.logger.warn('   Add credentials to .env to enable email sending.');
      return;
    }

    try {
      const credential = new ClientSecretCredential(
        tenantId,
        clientId,
        clientSecret,
      );

      const authProvider = new TokenCredentialAuthenticationProvider(
        credential,
        {
          scopes: ['https://graph.microsoft.com/.default'],
        },
      );

      this.graphClient = Client.initWithMiddleware({ authProvider });
      this.logger.log('✅ Microsoft Graph client initialized successfully');
    } catch (error) {
      this.logger.error('❌ Failed to initialize Microsoft Graph client', error);
    }
  }

  async sendContactNotification(contactData: CreateContactDto): Promise<void> {
    this.logger.log('📧 Processing contact form submission...');
    this.logger.log(`   Name: ${contactData.name}`);
    this.logger.log(`   Email: ${contactData.email}`);
    this.logger.log(`   Company: ${contactData.company}`);
    this.logger.log(`   Phone: ${contactData.phone}`);
    this.logger.log(`   Service: ${contactData.service}`);

    if (!this.graphClient) {
      this.logger.warn('📭 Email not sent (credentials not configured)');
      return;
    }

    try {
      // Send notification to company
      await this.sendCompanyNotification(contactData);

      // Send confirmation to user
      await this.sendUserConfirmation(contactData);

      this.logger.log('✅ Emails sent successfully');
    } catch (error) {
      this.logger.error('❌ Failed to send emails', error);
      throw error;
    }
  }

  private async sendCompanyNotification(
    contactData: CreateContactDto,
  ): Promise<void> {
    if (!this.graphClient) {
      throw new Error('Microsoft Graph client not initialized');
    }

    const emailFrom = this.configService.get<string>('MICROSOFT_EMAIL_FROM');
    const emailTo = this.configService.get<string>('MAIL_TO');

    const message = {
      message: {
        subject: `🔔 New Contact Form Submission - ${contactData.company}`,
        body: {
          contentType: 'HTML',
          content: this.getCompanyEmailTemplate(contactData),
        },
        toRecipients: [
          {
            emailAddress: {
              address: emailTo,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    await this.graphClient
      .api(`/users/${emailFrom}/sendMail`)
      .post(message);

    this.logger.log(`📨 Company notification sent to ${emailTo}`);
  }

  private async sendUserConfirmation(
    contactData: CreateContactDto,
  ): Promise<void> {
    if (!this.graphClient) {
      throw new Error('Microsoft Graph client not initialized');
    }

    const emailFrom = this.configService.get<string>('MICROSOFT_EMAIL_FROM');

    const message = {
      message: {
        subject: 'Thank you for contacting Sense Corporation',
        body: {
          contentType: 'HTML',
          content: this.getUserConfirmationTemplate(contactData),
        },
        toRecipients: [
          {
            emailAddress: {
              address: contactData.email,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    await this.graphClient
      .api(`/users/${emailFrom}/sendMail`)
      .post(message);

    this.logger.log(`📨 Confirmation sent to ${contactData.email}`);
  }

  private getCompanyEmailTemplate(contactData: CreateContactDto): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
        New Contact Form Submission
      </h1>
      <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
        ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>

    <!-- Content Card -->
    <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      
      <!-- Contact Information -->
      <div style="margin-bottom: 30px;">
        <h2 style="margin: 0 0 20px; color: #0f172a; font-size: 18px; font-weight: 600; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          Contact Information
        </h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #475569; font-size: 14px;">Name:</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
              <span style="color: #0f172a; font-size: 14px;">${contactData.name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #475569; font-size: 14px;">Email:</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
              <a href="mailto:${contactData.email}" style="color: #ea580c; font-size: 14px; text-decoration: none;">${contactData.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #475569; font-size: 14px;">Company:</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
              <span style="color: #0f172a; font-size: 14px;">${contactData.company}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <strong style="color: #475569; font-size: 14px;">Phone:</strong>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
              <a href="tel:${contactData.phone}" style="color: #ea580c; font-size: 14px; text-decoration: none;">${contactData.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0;">
              <strong style="color: #475569; font-size: 14px;">Service Interest:</strong>
            </td>
            <td style="padding: 12px 0; text-align: right;">
              <span style="display: inline-block; background-color: #fff7ed; color: #ea580c; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 500;">${contactData.service}</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="margin-bottom: 30px;">
        <h2 style="margin: 0 0 15px; color: #0f172a; font-size: 18px; font-weight: 600; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          Message
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #ea580c;">
          <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
        </div>
      </div>

      <!-- Action Button -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${contactData.email}" style="display: inline-block; background-color: #ea580c; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(234, 88, 12, 0.2);">
          Reply to ${contactData.name}
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 12px;">
      <p style="margin: 0 0 10px;">
        <strong>Sense Corporation</strong> • Modern Technology Solutions
      </p>
      <p style="margin: 0;">
        This is an automated notification from your website contact form.
      </p>
    </div>
  </div>
</body>
</html>
    `;
  }

  private getUserConfirmationTemplate(contactData: CreateContactDto): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%); padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <div style="width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.2); border-radius: 12px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
        Thank You!
      </h1>
      <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
        We've received your message
      </p>
    </div>

    <!-- Content Card -->
    <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      
      <!-- Greeting -->
      <div style="margin-bottom: 30px;">
        <p style="margin: 0 0 15px; color: #0f172a; font-size: 16px; line-height: 1.6;">
          Hi <strong>${contactData.name}</strong>,
        </p>
        <p style="margin: 0 0 15px; color: #475569; font-size: 15px; line-height: 1.6;">
          Thank you for reaching out to <strong style="color: #ea580c;">Sense Corporation</strong>. We appreciate your interest in our services and have received your inquiry about <strong>${contactData.service}</strong>.
        </p>
        <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.6;">
          Our team will review your message and get back to you within <strong>24 hours</strong> during business days.
        </p>
      </div>

      <!-- What's Next -->
      <div style="margin-bottom: 30px;">
        <h2 style="margin: 0 0 15px; color: #0f172a; font-size: 16px; font-weight: 600;">
          What happens next?
        </h2>
        <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
          <li style="margin-bottom: 8px;">Our expert team will review your inquiry</li>
          <li style="margin-bottom: 8px;">We'll prepare a tailored response to your needs</li>
          <li style="margin-bottom: 8px;">You'll receive a detailed follow-up via email</li>
          <li>We may schedule a call to discuss your project in detail</li>
        </ul>
      </div>

      <!-- Summary -->
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 15px; color: #0f172a; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Your Submission Summary
        </h3>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Service Interest:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 13px; text-align: right; font-weight: 500;">${contactData.service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Company:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 13px; text-align: right; font-weight: 500;">${contactData.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Submission Date:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 13px; text-align: right; font-weight: 500;">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin-top: 30px; padding-top: 30px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 20px; color: #64748b; font-size: 14px;">
          Want to learn more about us?
        </p>
        <a href="https://sense.cr" style="display: inline-block; background-color: #ea580c; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(234, 88, 12, 0.2);">
          Visit Website
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="margin-top: 30px; text-align: center;">
      <div style="margin-bottom: 15px;">
        <a href="mailto:info@sense.cr" style="color: #ea580c; text-decoration: none; font-size: 13px;">info@sense.cr</a>
      </div>

      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
        San José, Costa Rica
      </p>
      
      <p style="margin: 20px 0 0; color: #cbd5e1; font-size: 11px;">
        © ${new Date().getFullYear()} Sense Corporation. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
    `;
  }
}
