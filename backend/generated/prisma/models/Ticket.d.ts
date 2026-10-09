import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TicketModel = runtime.Types.Result.DefaultSelection<Prisma.$TicketPayload>;
export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type TicketMinAggregateOutputType = {
    id: string | null;
    ticketNumber: string | null;
    qrToken: string | null;
    registrationId: string | null;
    attendeeId: string | null;
    eventId: string | null;
    ticketTypeId: string | null;
    status: $Enums.TicketStatus | null;
    checkedInAt: Date | null;
    createdAt: Date | null;
};
export type TicketMaxAggregateOutputType = {
    id: string | null;
    ticketNumber: string | null;
    qrToken: string | null;
    registrationId: string | null;
    attendeeId: string | null;
    eventId: string | null;
    ticketTypeId: string | null;
    status: $Enums.TicketStatus | null;
    checkedInAt: Date | null;
    createdAt: Date | null;
};
export type TicketCountAggregateOutputType = {
    id: number;
    ticketNumber: number;
    qrToken: number;
    registrationId: number;
    attendeeId: number;
    eventId: number;
    ticketTypeId: number;
    status: number;
    checkedInAt: number;
    createdAt: number;
    _all: number;
};
export type TicketMinAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    qrToken?: true;
    registrationId?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    status?: true;
    checkedInAt?: true;
    createdAt?: true;
};
export type TicketMaxAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    qrToken?: true;
    registrationId?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    status?: true;
    checkedInAt?: true;
    createdAt?: true;
};
export type TicketCountAggregateInputType = {
    id?: true;
    ticketNumber?: true;
    qrToken?: true;
    registrationId?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    status?: true;
    checkedInAt?: true;
    createdAt?: true;
    _all?: true;
};
export type TicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TicketCountAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicket[P]> : Prisma.GetScalarType<T[P], AggregateTicket[P]>;
};
export type TicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithAggregationInput | Prisma.TicketOrderByWithAggregationInput[];
    by: Prisma.TicketScalarFieldEnum[] | Prisma.TicketScalarFieldEnum;
    having?: Prisma.TicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type TicketGroupByOutputType = {
    id: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    status: $Enums.TicketStatus;
    checkedInAt: Date | null;
    createdAt: Date;
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]>;
}>>;
export type TicketWhereInput = {
    AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    OR?: Prisma.TicketWhereInput[];
    NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    id?: Prisma.StringFilter<"Ticket"> | string;
    ticketNumber?: Prisma.StringFilter<"Ticket"> | string;
    qrToken?: Prisma.StringFilter<"Ticket"> | string;
    registrationId?: Prisma.StringFilter<"Ticket"> | string;
    attendeeId?: Prisma.StringFilter<"Ticket"> | string;
    eventId?: Prisma.StringFilter<"Ticket"> | string;
    ticketTypeId?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    checkedInAt?: Prisma.DateTimeNullableFilter<"Ticket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    registration?: Prisma.XOR<Prisma.RegistrationScalarRelationFilter, Prisma.RegistrationWhereInput>;
    attendee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticketType?: Prisma.XOR<Prisma.TicketTypeScalarRelationFilter, Prisma.TicketTypeWhereInput>;
};
export type TicketOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    registration?: Prisma.RegistrationOrderByWithRelationInput;
    attendee?: Prisma.UserOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    ticketType?: Prisma.TicketTypeOrderByWithRelationInput;
};
export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ticketNumber?: string;
    qrToken?: string;
    AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    OR?: Prisma.TicketWhereInput[];
    NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    registrationId?: Prisma.StringFilter<"Ticket"> | string;
    attendeeId?: Prisma.StringFilter<"Ticket"> | string;
    eventId?: Prisma.StringFilter<"Ticket"> | string;
    ticketTypeId?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    checkedInAt?: Prisma.DateTimeNullableFilter<"Ticket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    registration?: Prisma.XOR<Prisma.RegistrationScalarRelationFilter, Prisma.RegistrationWhereInput>;
    attendee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticketType?: Prisma.XOR<Prisma.TicketTypeScalarRelationFilter, Prisma.TicketTypeWhereInput>;
}, "id" | "ticketNumber" | "qrToken">;
export type TicketOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TicketCountOrderByAggregateInput;
    _max?: Prisma.TicketMaxOrderByAggregateInput;
    _min?: Prisma.TicketMinOrderByAggregateInput;
};
export type TicketScalarWhereWithAggregatesInput = {
    AND?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[];
    OR?: Prisma.TicketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    ticketNumber?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    qrToken?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    registrationId?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    attendeeId?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    ticketTypeId?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus;
    checkedInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ticket"> | Date | string;
};
export type TicketCreateInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    registration: Prisma.RegistrationCreateNestedOneWithoutTicketsInput;
    attendee: Prisma.UserCreateNestedOneWithoutTicketsInput;
    event: Prisma.EventCreateNestedOneWithoutTicketsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutTicketsInput;
};
export type TicketUncheckedCreateInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration?: Prisma.RegistrationUpdateOneRequiredWithoutTicketsNestedInput;
    attendee?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutTicketsNestedInput;
};
export type TicketUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketListRelationFilter = {
    every?: Prisma.TicketWhereInput;
    some?: Prisma.TicketWhereInput;
    none?: Prisma.TicketWhereInput;
};
export type TicketOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TicketCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput> | Prisma.TicketCreateWithoutAttendeeInput[] | Prisma.TicketUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAttendeeInput | Prisma.TicketCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.TicketCreateManyAttendeeInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput> | Prisma.TicketCreateWithoutAttendeeInput[] | Prisma.TicketUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAttendeeInput | Prisma.TicketCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.TicketCreateManyAttendeeInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput> | Prisma.TicketCreateWithoutAttendeeInput[] | Prisma.TicketUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAttendeeInput | Prisma.TicketCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.TicketUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.TicketCreateManyAttendeeInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.TicketUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutAttendeeInput | Prisma.TicketUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput> | Prisma.TicketCreateWithoutAttendeeInput[] | Prisma.TicketUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAttendeeInput | Prisma.TicketCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.TicketUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.TicketCreateManyAttendeeInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.TicketUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutAttendeeInput | Prisma.TicketUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput> | Prisma.TicketCreateWithoutEventInput[] | Prisma.TicketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutEventInput | Prisma.TicketCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TicketCreateManyEventInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput> | Prisma.TicketCreateWithoutEventInput[] | Prisma.TicketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutEventInput | Prisma.TicketCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TicketCreateManyEventInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput> | Prisma.TicketCreateWithoutEventInput[] | Prisma.TicketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutEventInput | Prisma.TicketCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutEventInput | Prisma.TicketUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TicketCreateManyEventInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutEventInput | Prisma.TicketUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutEventInput | Prisma.TicketUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput> | Prisma.TicketCreateWithoutEventInput[] | Prisma.TicketUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutEventInput | Prisma.TicketCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutEventInput | Prisma.TicketUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TicketCreateManyEventInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutEventInput | Prisma.TicketUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutEventInput | Prisma.TicketUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketCreateNestedManyWithoutTicketTypeInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput> | Prisma.TicketCreateWithoutTicketTypeInput[] | Prisma.TicketUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutTicketTypeInput | Prisma.TicketCreateOrConnectWithoutTicketTypeInput[];
    createMany?: Prisma.TicketCreateManyTicketTypeInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput> | Prisma.TicketCreateWithoutTicketTypeInput[] | Prisma.TicketUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutTicketTypeInput | Prisma.TicketCreateOrConnectWithoutTicketTypeInput[];
    createMany?: Prisma.TicketCreateManyTicketTypeInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutTicketTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput> | Prisma.TicketCreateWithoutTicketTypeInput[] | Prisma.TicketUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutTicketTypeInput | Prisma.TicketCreateOrConnectWithoutTicketTypeInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutTicketTypeInput | Prisma.TicketUpsertWithWhereUniqueWithoutTicketTypeInput[];
    createMany?: Prisma.TicketCreateManyTicketTypeInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutTicketTypeInput | Prisma.TicketUpdateWithWhereUniqueWithoutTicketTypeInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutTicketTypeInput | Prisma.TicketUpdateManyWithWhereWithoutTicketTypeInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput> | Prisma.TicketCreateWithoutTicketTypeInput[] | Prisma.TicketUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutTicketTypeInput | Prisma.TicketCreateOrConnectWithoutTicketTypeInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutTicketTypeInput | Prisma.TicketUpsertWithWhereUniqueWithoutTicketTypeInput[];
    createMany?: Prisma.TicketCreateManyTicketTypeInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutTicketTypeInput | Prisma.TicketUpdateWithWhereUniqueWithoutTicketTypeInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutTicketTypeInput | Prisma.TicketUpdateManyWithWhereWithoutTicketTypeInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketCreateNestedManyWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput> | Prisma.TicketCreateWithoutRegistrationInput[] | Prisma.TicketUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutRegistrationInput | Prisma.TicketCreateOrConnectWithoutRegistrationInput[];
    createMany?: Prisma.TicketCreateManyRegistrationInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput> | Prisma.TicketCreateWithoutRegistrationInput[] | Prisma.TicketUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutRegistrationInput | Prisma.TicketCreateOrConnectWithoutRegistrationInput[];
    createMany?: Prisma.TicketCreateManyRegistrationInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput> | Prisma.TicketCreateWithoutRegistrationInput[] | Prisma.TicketUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutRegistrationInput | Prisma.TicketCreateOrConnectWithoutRegistrationInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutRegistrationInput | Prisma.TicketUpsertWithWhereUniqueWithoutRegistrationInput[];
    createMany?: Prisma.TicketCreateManyRegistrationInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutRegistrationInput | Prisma.TicketUpdateWithWhereUniqueWithoutRegistrationInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutRegistrationInput | Prisma.TicketUpdateManyWithWhereWithoutRegistrationInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput> | Prisma.TicketCreateWithoutRegistrationInput[] | Prisma.TicketUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutRegistrationInput | Prisma.TicketCreateOrConnectWithoutRegistrationInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutRegistrationInput | Prisma.TicketUpsertWithWhereUniqueWithoutRegistrationInput[];
    createMany?: Prisma.TicketCreateManyRegistrationInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutRegistrationInput | Prisma.TicketUpdateWithWhereUniqueWithoutRegistrationInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutRegistrationInput | Prisma.TicketUpdateManyWithWhereWithoutRegistrationInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus;
};
export type TicketCreateWithoutAttendeeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    registration: Prisma.RegistrationCreateNestedOneWithoutTicketsInput;
    event: Prisma.EventCreateNestedOneWithoutTicketsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutTicketsInput;
};
export type TicketUncheckedCreateWithoutAttendeeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketCreateOrConnectWithoutAttendeeInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput>;
};
export type TicketCreateManyAttendeeInputEnvelope = {
    data: Prisma.TicketCreateManyAttendeeInput | Prisma.TicketCreateManyAttendeeInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutAttendeeInput, Prisma.TicketUncheckedUpdateWithoutAttendeeInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutAttendeeInput, Prisma.TicketUncheckedCreateWithoutAttendeeInput>;
};
export type TicketUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutAttendeeInput, Prisma.TicketUncheckedUpdateWithoutAttendeeInput>;
};
export type TicketUpdateManyWithWhereWithoutAttendeeInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutAttendeeInput>;
};
export type TicketScalarWhereInput = {
    AND?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
    OR?: Prisma.TicketScalarWhereInput[];
    NOT?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
    id?: Prisma.StringFilter<"Ticket"> | string;
    ticketNumber?: Prisma.StringFilter<"Ticket"> | string;
    qrToken?: Prisma.StringFilter<"Ticket"> | string;
    registrationId?: Prisma.StringFilter<"Ticket"> | string;
    attendeeId?: Prisma.StringFilter<"Ticket"> | string;
    eventId?: Prisma.StringFilter<"Ticket"> | string;
    ticketTypeId?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    checkedInAt?: Prisma.DateTimeNullableFilter<"Ticket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
};
export type TicketCreateWithoutEventInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    registration: Prisma.RegistrationCreateNestedOneWithoutTicketsInput;
    attendee: Prisma.UserCreateNestedOneWithoutTicketsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutTicketsInput;
};
export type TicketUncheckedCreateWithoutEventInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketCreateOrConnectWithoutEventInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput>;
};
export type TicketCreateManyEventInputEnvelope = {
    data: Prisma.TicketCreateManyEventInput | Prisma.TicketCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutEventInput, Prisma.TicketUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutEventInput, Prisma.TicketUncheckedCreateWithoutEventInput>;
};
export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutEventInput, Prisma.TicketUncheckedUpdateWithoutEventInput>;
};
export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutEventInput>;
};
export type TicketCreateWithoutTicketTypeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    registration: Prisma.RegistrationCreateNestedOneWithoutTicketsInput;
    attendee: Prisma.UserCreateNestedOneWithoutTicketsInput;
    event: Prisma.EventCreateNestedOneWithoutTicketsInput;
};
export type TicketUncheckedCreateWithoutTicketTypeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    eventId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketCreateOrConnectWithoutTicketTypeInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput>;
};
export type TicketCreateManyTicketTypeInputEnvelope = {
    data: Prisma.TicketCreateManyTicketTypeInput | Prisma.TicketCreateManyTicketTypeInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutTicketTypeInput, Prisma.TicketUncheckedUpdateWithoutTicketTypeInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutTicketTypeInput, Prisma.TicketUncheckedCreateWithoutTicketTypeInput>;
};
export type TicketUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutTicketTypeInput, Prisma.TicketUncheckedUpdateWithoutTicketTypeInput>;
};
export type TicketUpdateManyWithWhereWithoutTicketTypeInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutTicketTypeInput>;
};
export type TicketCreateWithoutRegistrationInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    attendee: Prisma.UserCreateNestedOneWithoutTicketsInput;
    event: Prisma.EventCreateNestedOneWithoutTicketsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutTicketsInput;
};
export type TicketUncheckedCreateWithoutRegistrationInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketCreateOrConnectWithoutRegistrationInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput>;
};
export type TicketCreateManyRegistrationInputEnvelope = {
    data: Prisma.TicketCreateManyRegistrationInput | Prisma.TicketCreateManyRegistrationInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutRegistrationInput, Prisma.TicketUncheckedUpdateWithoutRegistrationInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutRegistrationInput, Prisma.TicketUncheckedCreateWithoutRegistrationInput>;
};
export type TicketUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutRegistrationInput, Prisma.TicketUncheckedUpdateWithoutRegistrationInput>;
};
export type TicketUpdateManyWithWhereWithoutRegistrationInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutRegistrationInput>;
};
export type TicketCreateManyAttendeeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration?: Prisma.RegistrationUpdateOneRequiredWithoutTicketsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutTicketsNestedInput;
};
export type TicketUncheckedUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyEventInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration?: Prisma.RegistrationUpdateOneRequiredWithoutTicketsNestedInput;
    attendee?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutTicketsNestedInput;
};
export type TicketUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyTicketTypeInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    registrationId: string;
    attendeeId: string;
    eventId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration?: Prisma.RegistrationUpdateOneRequiredWithoutTicketsNestedInput;
    attendee?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput;
};
export type TicketUncheckedUpdateWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyRegistrationInput = {
    id?: string;
    ticketNumber: string;
    qrToken: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    status?: $Enums.TicketStatus;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
};
export type TicketUpdateWithoutRegistrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendee?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutTicketsNestedInput;
};
export type TicketUncheckedUpdateWithoutRegistrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyWithoutRegistrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    qrToken?: boolean;
    registrationId?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    status?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    qrToken?: boolean;
    registrationId?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    status?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketNumber?: boolean;
    qrToken?: boolean;
    registrationId?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    status?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectScalar = {
    id?: boolean;
    ticketNumber?: boolean;
    qrToken?: boolean;
    registrationId?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    status?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
};
export type TicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ticketNumber" | "qrToken" | "registrationId" | "attendeeId" | "eventId" | "ticketTypeId" | "status" | "checkedInAt" | "createdAt", ExtArgs["result"]["ticket"]>;
export type TicketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
};
export type TicketIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
};
export type TicketIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registration?: boolean | Prisma.RegistrationDefaultArgs<ExtArgs>;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
};
export type $TicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ticket";
    objects: {
        registration: Prisma.$RegistrationPayload<ExtArgs>;
        attendee: Prisma.$UserPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        ticketType: Prisma.$TicketTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ticketNumber: string;
        qrToken: string;
        registrationId: string;
        attendeeId: string;
        eventId: string;
        ticketTypeId: string;
        status: $Enums.TicketStatus;
        checkedInAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["ticket"]>;
    composites: {};
};
export type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TicketPayload, S>;
export type TicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketCountAggregateInputType | true;
};
export interface TicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ticket'];
        meta: {
            name: 'Ticket';
        };
    };
    findUnique<T extends TicketFindUniqueArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TicketFindFirstArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TicketFindManyArgs>(args?: Prisma.SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TicketCreateArgs>(args: Prisma.SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TicketCreateManyArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TicketDeleteArgs>(args: Prisma.SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TicketUpdateArgs>(args: Prisma.SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TicketUpdateManyArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TicketUpsertArgs>(args: Prisma.SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TicketCountArgs>(args?: Prisma.Subset<T, TicketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketCountAggregateOutputType> : number>;
    aggregate<T extends TicketAggregateArgs>(args: Prisma.Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>;
    groupBy<T extends TicketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TicketGroupByArgs['orderBy'];
    } : {
        orderBy?: TicketGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TicketFieldRefs;
}
export interface Prisma__TicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    registration<T extends Prisma.RegistrationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RegistrationDefaultArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attendee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ticketType<T extends Prisma.TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TicketTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TicketFieldRefs {
    readonly id: Prisma.FieldRef<"Ticket", 'String'>;
    readonly ticketNumber: Prisma.FieldRef<"Ticket", 'String'>;
    readonly qrToken: Prisma.FieldRef<"Ticket", 'String'>;
    readonly registrationId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly attendeeId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly eventId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly ticketTypeId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly status: Prisma.FieldRef<"Ticket", 'TicketStatus'>;
    readonly checkedInAt: Prisma.FieldRef<"Ticket", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Ticket", 'DateTime'>;
}
export type TicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>;
};
export type TicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TicketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TicketIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>;
    where?: Prisma.TicketWhereInput;
    limit?: number;
};
export type TicketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>;
    where?: Prisma.TicketWhereInput;
    limit?: number;
    include?: Prisma.TicketIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>;
};
export type TicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    limit?: number;
};
export type TicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
};
