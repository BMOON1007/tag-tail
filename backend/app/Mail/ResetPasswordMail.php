<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $ownerName,
        public string $resetUrl,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Reset your Tag-Tails password',
        );
    }

    public function content(): Content
    {
        $name = e($this->ownerName);
        $url = e($this->resetUrl);

        return new Content(
            htmlString: <<<HTML
                <p>Hello {$name},</p>
                <p>We received a request to reset the password for your Tag-Tails account.</p>
                <p><a href="{$url}">Choose a new password</a></p>
                <p>This link expires in 60 minutes. If you did not ask for this, you can ignore this email.</p>
            HTML,
        );
    }
}
