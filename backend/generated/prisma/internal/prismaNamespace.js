import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Category: 'Category',
    Event: 'Event',
    EventSession: 'EventSession',
    TicketType: 'TicketType',
    Registration: 'Registration',
    Payment: 'Payment',
    Ticket: 'Ticket'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EventScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    venue: 'venue',
    address: 'address',
    coverImageUrl: 'coverImageUrl',
    coverImagePublicId: 'coverImagePublicId',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    maxCapacity: 'maxCapacity',
    registeredCount: 'registeredCount',
    status: 'status',
    organizerId: 'organizerId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EventSessionScalarFieldEnum = {
    id: 'id',
    eventId: 'eventId',
    title: 'title',
    description: 'description',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    venue: 'venue',
    speakerName: 'speakerName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TicketTypeScalarFieldEnum = {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    soldQuantity: 'soldQuantity',
    salesStart: 'salesStart',
    salesEnd: 'salesEnd',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RegistrationScalarFieldEnum = {
    id: 'id',
    attendeeId: 'attendeeId',
    eventId: 'eventId',
    ticketTypeId: 'ticketTypeId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    status: 'status',
    registeredAt: 'registeredAt',
    cancelledAt: 'cancelledAt',
    expiresAt: 'expiresAt'
};
export const PaymentScalarFieldEnum = {
    id: 'id',
    registrationId: 'registrationId',
    providerReference: 'providerReference',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    confirmedAt: 'confirmedAt'
};
export const TicketScalarFieldEnum = {
    id: 'id',
    ticketNumber: 'ticketNumber',
    qrToken: 'qrToken',
    registrationId: 'registrationId',
    attendeeId: 'attendeeId',
    eventId: 'eventId',
    ticketTypeId: 'ticketTypeId',
    status: 'status',
    checkedInAt: 'checkedInAt',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map