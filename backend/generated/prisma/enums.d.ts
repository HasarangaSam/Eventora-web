export declare const UserRole: {
    readonly ATTENDEE: "ATTENDEE";
    readonly ORGANIZER: "ORGANIZER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const RegistrationStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
};
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCEEDED: "SUCCEEDED";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const TicketStatus: {
    readonly VALID: "VALID";
    readonly CANCELLED: "CANCELLED";
    readonly CHECKED_IN: "CHECKED_IN";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
