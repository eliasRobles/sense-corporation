import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { EmailService } from '../email/email.service';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly emailService: EmailService) {}

  async create(createContactDto: CreateContactDto) {
    this.logger.log(`New contact request from ${createContactDto.email}`);

    // Log the contact for now - will integrate email in future phases
    this.logger.log(
      `Contact: ${createContactDto.name} (${createContactDto.company})`,
    );

    // Prepare for future email integration
    await this.emailService.sendContactNotification(createContactDto);

    return {
      message: 'Contact request received successfully',
      success: true,
    };
  }
}
