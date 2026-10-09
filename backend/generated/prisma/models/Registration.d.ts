import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegistrationModel = runtime.Types.Result.DefaultSelection<Prisma.$RegistrationPayload>;
export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null;
    _avg: RegistrationAvgAggregateOutputType | null;
    _sum: RegistrationSumAggregateOutputType | null;
    _min: RegistrationMinAggregateOutputType | null;
    _max: RegistrationMaxAggregateOutputType | null;
};
export type RegistrationAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
};
export type RegistrationSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
};
export type RegistrationMinAggregateOutputType = {
    id: string | null;
    attendeeId: string | null;
    eventId: string | null;
    ticketTypeId: string | null;
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
    status: $Enums.RegistrationStatus | null;
    registeredAt: Date | null;
    cancelledAt: Date | null;
    expiresAt: Date | null;
};
export type RegistrationMaxAggregateOutputType = {
    id: string | null;
    attendeeId: string | null;
    eventId: string | null;
    ticketTypeId: string | null;
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
    status: $Enums.RegistrationStatus | null;
    registeredAt: Date | null;
    cancelledAt: Date | null;
    expiresAt: Date | null;
};
export type RegistrationCountAggregateOutputType = {
    id: number;
    attendeeId: number;
    eventId: number;
    ticketTypeId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status: number;
    registeredAt: number;
    cancelledAt: number;
    expiresAt: number;
    _all: number;
};
export type RegistrationAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type RegistrationSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type RegistrationMinAggregateInputType = {
    id?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    status?: true;
    registeredAt?: true;
    cancelledAt?: true;
    expiresAt?: true;
};
export type RegistrationMaxAggregateInputType = {
    id?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    status?: true;
    registeredAt?: true;
    cancelledAt?: true;
    expiresAt?: true;
};
export type RegistrationCountAggregateInputType = {
    id?: true;
    attendeeId?: true;
    eventId?: true;
    ticketTypeId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    status?: true;
    registeredAt?: true;
    cancelledAt?: true;
    expiresAt?: true;
    _all?: true;
};
export type RegistrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegistrationCountAggregateInputType;
    _avg?: RegistrationAvgAggregateInputType;
    _sum?: RegistrationSumAggregateInputType;
    _min?: RegistrationMinAggregateInputType;
    _max?: RegistrationMaxAggregateInputType;
};
export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistration[P]> : Prisma.GetScalarType<T[P], AggregateRegistration[P]>;
};
export type RegistrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithAggregationInput | Prisma.RegistrationOrderByWithAggregationInput[];
    by: Prisma.RegistrationScalarFieldEnum[] | Prisma.RegistrationScalarFieldEnum;
    having?: Prisma.RegistrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistrationCountAggregateInputType | true;
    _avg?: RegistrationAvgAggregateInputType;
    _sum?: RegistrationSumAggregateInputType;
    _min?: RegistrationMinAggregateInputType;
    _max?: RegistrationMaxAggregateInputType;
};
export type RegistrationGroupByOutputType = {
    id: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status: $Enums.RegistrationStatus;
    registeredAt: Date;
    cancelledAt: Date | null;
    expiresAt: Date | null;
    _count: RegistrationCountAggregateOutputType | null;
    _avg: RegistrationAvgAggregateOutputType | null;
    _sum: RegistrationSumAggregateOutputType | null;
    _min: RegistrationMinAggregateOutputType | null;
    _max: RegistrationMaxAggregateOutputType | null;
};
export type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistrationGroupByOutputType[P]>;
}>>;
export type RegistrationWhereInput = {
    AND?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    OR?: Prisma.RegistrationWhereInput[];
    NOT?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    id?: Prisma.StringFilter<"Registration"> | string;
    attendeeId?: Prisma.StringFilter<"Registration"> | string;
    eventId?: Prisma.StringFilter<"Registration"> | string;
    ticketTypeId?: Prisma.StringFilter<"Registration"> | string;
    quantity?: Prisma.IntFilter<"Registration"> | number;
    unitPrice?: Prisma.IntFilter<"Registration"> | number;
    totalPrice?: Prisma.IntFilter<"Registration"> | number;
    status?: Prisma.EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
    attendee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticketType?: Prisma.XOR<Prisma.TicketTypeScalarRelationFilter, Prisma.TicketTypeWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
    tickets?: Prisma.TicketListRelationFilter;
};
export type RegistrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    attendee?: Prisma.UserOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    ticketType?: Prisma.TicketTypeOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
    tickets?: Prisma.TicketOrderByRelationAggregateInput;
};
export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    OR?: Prisma.RegistrationWhereInput[];
    NOT?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    attendeeId?: Prisma.StringFilter<"Registration"> | string;
    eventId?: Prisma.StringFilter<"Registration"> | string;
    ticketTypeId?: Prisma.StringFilter<"Registration"> | string;
    quantity?: Prisma.IntFilter<"Registration"> | number;
    unitPrice?: Prisma.IntFilter<"Registration"> | number;
    totalPrice?: Prisma.IntFilter<"Registration"> | number;
    status?: Prisma.EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
    attendee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    ticketType?: Prisma.XOR<Prisma.TicketTypeScalarRelationFilter, Prisma.TicketTypeWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
    tickets?: Prisma.TicketListRelationFilter;
}, "id">;
export type RegistrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RegistrationCountOrderByAggregateInput;
    _avg?: Prisma.RegistrationAvgOrderByAggregateInput;
    _max?: Prisma.RegistrationMaxOrderByAggregateInput;
    _min?: Prisma.RegistrationMinOrderByAggregateInput;
    _sum?: Prisma.RegistrationSumOrderByAggregateInput;
};
export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegistrationScalarWhereWithAggregatesInput | Prisma.RegistrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegistrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegistrationScalarWhereWithAggregatesInput | Prisma.RegistrationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Registration"> | string;
    attendeeId?: Prisma.StringWithAggregatesFilter<"Registration"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"Registration"> | string;
    ticketTypeId?: Prisma.StringWithAggregatesFilter<"Registration"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    unitPrice?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    totalPrice?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    status?: Prisma.EnumRegistrationStatusWithAggregatesFilter<"Registration"> | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeWithAggregatesFilter<"Registration"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null;
};
export type RegistrationCreateInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    attendee: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutRegistrationsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutRegistrationsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendee?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationCreateManyInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
};
export type RegistrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationListRelationFilter = {
    every?: Prisma.RegistrationWhereInput;
    some?: Prisma.RegistrationWhereInput;
    none?: Prisma.RegistrationWhereInput;
};
export type RegistrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type RegistrationAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type RegistrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type RegistrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendeeId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type RegistrationSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type RegistrationScalarRelationFilter = {
    is?: Prisma.RegistrationWhereInput;
    isNot?: Prisma.RegistrationWhereInput;
};
export type RegistrationCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput> | Prisma.RegistrationCreateWithoutAttendeeInput[] | Prisma.RegistrationUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutAttendeeInput | Prisma.RegistrationCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.RegistrationCreateManyAttendeeInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput> | Prisma.RegistrationCreateWithoutAttendeeInput[] | Prisma.RegistrationUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutAttendeeInput | Prisma.RegistrationCreateOrConnectWithoutAttendeeInput[];
    createMany?: Prisma.RegistrationCreateManyAttendeeInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput> | Prisma.RegistrationCreateWithoutAttendeeInput[] | Prisma.RegistrationUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutAttendeeInput | Prisma.RegistrationCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.RegistrationCreateManyAttendeeInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput | Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput> | Prisma.RegistrationCreateWithoutAttendeeInput[] | Prisma.RegistrationUncheckedCreateWithoutAttendeeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutAttendeeInput | Prisma.RegistrationCreateOrConnectWithoutAttendeeInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutAttendeeInput[];
    createMany?: Prisma.RegistrationCreateManyAttendeeInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutAttendeeInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput | Prisma.RegistrationUpdateManyWithWhereWithoutAttendeeInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput> | Prisma.RegistrationCreateWithoutEventInput[] | Prisma.RegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutEventInput | Prisma.RegistrationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RegistrationCreateManyEventInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput> | Prisma.RegistrationCreateWithoutEventInput[] | Prisma.RegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutEventInput | Prisma.RegistrationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.RegistrationCreateManyEventInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput> | Prisma.RegistrationCreateWithoutEventInput[] | Prisma.RegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutEventInput | Prisma.RegistrationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RegistrationCreateManyEventInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutEventInput | Prisma.RegistrationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput> | Prisma.RegistrationCreateWithoutEventInput[] | Prisma.RegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutEventInput | Prisma.RegistrationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.RegistrationCreateManyEventInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutEventInput | Prisma.RegistrationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationCreateNestedManyWithoutTicketTypeInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput> | Prisma.RegistrationCreateWithoutTicketTypeInput[] | Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput | Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput[];
    createMany?: Prisma.RegistrationCreateManyTicketTypeInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput> | Prisma.RegistrationCreateWithoutTicketTypeInput[] | Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput | Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput[];
    createMany?: Prisma.RegistrationCreateManyTicketTypeInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUpdateManyWithoutTicketTypeNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput> | Prisma.RegistrationCreateWithoutTicketTypeInput[] | Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput | Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutTicketTypeInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutTicketTypeInput[];
    createMany?: Prisma.RegistrationCreateManyTicketTypeInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutTicketTypeInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutTicketTypeInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutTicketTypeInput | Prisma.RegistrationUpdateManyWithWhereWithoutTicketTypeInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput> | Prisma.RegistrationCreateWithoutTicketTypeInput[] | Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput | Prisma.RegistrationCreateOrConnectWithoutTicketTypeInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutTicketTypeInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutTicketTypeInput[];
    createMany?: Prisma.RegistrationCreateManyTicketTypeInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutTicketTypeInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutTicketTypeInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutTicketTypeInput | Prisma.RegistrationUpdateManyWithWhereWithoutTicketTypeInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus;
};
export type RegistrationCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutPaymentInput, Prisma.RegistrationUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutPaymentInput, Prisma.RegistrationUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.RegistrationUpsertWithoutPaymentInput;
    connect?: Prisma.RegistrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegistrationUpdateToOneWithWhereWithoutPaymentInput, Prisma.RegistrationUpdateWithoutPaymentInput>, Prisma.RegistrationUncheckedUpdateWithoutPaymentInput>;
};
export type RegistrationCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketsInput, Prisma.RegistrationUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketsInput, Prisma.RegistrationUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.RegistrationUpsertWithoutTicketsInput;
    connect?: Prisma.RegistrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegistrationUpdateToOneWithWhereWithoutTicketsInput, Prisma.RegistrationUpdateWithoutTicketsInput>, Prisma.RegistrationUncheckedUpdateWithoutTicketsInput>;
};
export type RegistrationCreateWithoutAttendeeInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutRegistrationsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutRegistrationsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateWithoutAttendeeInput = {
    id?: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationCreateOrConnectWithoutAttendeeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput>;
};
export type RegistrationCreateManyAttendeeInputEnvelope = {
    data: Prisma.RegistrationCreateManyAttendeeInput | Prisma.RegistrationCreateManyAttendeeInput[];
    skipDuplicates?: boolean;
};
export type RegistrationUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutAttendeeInput, Prisma.RegistrationUncheckedUpdateWithoutAttendeeInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutAttendeeInput, Prisma.RegistrationUncheckedCreateWithoutAttendeeInput>;
};
export type RegistrationUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutAttendeeInput, Prisma.RegistrationUncheckedUpdateWithoutAttendeeInput>;
};
export type RegistrationUpdateManyWithWhereWithoutAttendeeInput = {
    where: Prisma.RegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyWithoutAttendeeInput>;
};
export type RegistrationScalarWhereInput = {
    AND?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
    OR?: Prisma.RegistrationScalarWhereInput[];
    NOT?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
    id?: Prisma.StringFilter<"Registration"> | string;
    attendeeId?: Prisma.StringFilter<"Registration"> | string;
    eventId?: Prisma.StringFilter<"Registration"> | string;
    ticketTypeId?: Prisma.StringFilter<"Registration"> | string;
    quantity?: Prisma.IntFilter<"Registration"> | number;
    unitPrice?: Prisma.IntFilter<"Registration"> | number;
    totalPrice?: Prisma.IntFilter<"Registration"> | number;
    status?: Prisma.EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Registration"> | Date | string | null;
};
export type RegistrationCreateWithoutEventInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    attendee: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutRegistrationsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateWithoutEventInput = {
    id?: string;
    attendeeId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationCreateOrConnectWithoutEventInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput>;
};
export type RegistrationCreateManyEventInputEnvelope = {
    data: Prisma.RegistrationCreateManyEventInput | Prisma.RegistrationCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type RegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutEventInput, Prisma.RegistrationUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutEventInput, Prisma.RegistrationUncheckedCreateWithoutEventInput>;
};
export type RegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutEventInput, Prisma.RegistrationUncheckedUpdateWithoutEventInput>;
};
export type RegistrationUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.RegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyWithoutEventInput>;
};
export type RegistrationCreateWithoutTicketTypeInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    attendee: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutRegistrationsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateWithoutTicketTypeInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRegistrationInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationCreateOrConnectWithoutTicketTypeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput>;
};
export type RegistrationCreateManyTicketTypeInputEnvelope = {
    data: Prisma.RegistrationCreateManyTicketTypeInput | Prisma.RegistrationCreateManyTicketTypeInput[];
    skipDuplicates?: boolean;
};
export type RegistrationUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutTicketTypeInput, Prisma.RegistrationUncheckedUpdateWithoutTicketTypeInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketTypeInput, Prisma.RegistrationUncheckedCreateWithoutTicketTypeInput>;
};
export type RegistrationUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutTicketTypeInput, Prisma.RegistrationUncheckedUpdateWithoutTicketTypeInput>;
};
export type RegistrationUpdateManyWithWhereWithoutTicketTypeInput = {
    where: Prisma.RegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyWithoutTicketTypeInput>;
};
export type RegistrationCreateWithoutPaymentInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    attendee: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutRegistrationsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutRegistrationsInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateWithoutPaymentInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutRegistrationInput;
};
export type RegistrationCreateOrConnectWithoutPaymentInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutPaymentInput, Prisma.RegistrationUncheckedCreateWithoutPaymentInput>;
};
export type RegistrationUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutPaymentInput, Prisma.RegistrationUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutPaymentInput, Prisma.RegistrationUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.RegistrationWhereInput;
};
export type RegistrationUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.RegistrationWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutPaymentInput, Prisma.RegistrationUncheckedUpdateWithoutPaymentInput>;
};
export type RegistrationUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendee?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationCreateWithoutTicketsInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    attendee: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutRegistrationsInput;
    ticketType: Prisma.TicketTypeCreateNestedOneWithoutRegistrationsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutRegistrationInput;
};
export type RegistrationUncheckedCreateWithoutTicketsInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutRegistrationInput;
};
export type RegistrationCreateOrConnectWithoutTicketsInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketsInput, Prisma.RegistrationUncheckedCreateWithoutTicketsInput>;
};
export type RegistrationUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutTicketsInput, Prisma.RegistrationUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTicketsInput, Prisma.RegistrationUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.RegistrationWhereInput;
};
export type RegistrationUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.RegistrationWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutTicketsInput, Prisma.RegistrationUncheckedUpdateWithoutTicketsInput>;
};
export type RegistrationUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendee?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRegistrationNestedInput;
};
export type RegistrationCreateManyAttendeeInput = {
    id?: string;
    eventId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
};
export type RegistrationUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateManyWithoutAttendeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationCreateManyEventInput = {
    id?: string;
    attendeeId: string;
    ticketTypeId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
};
export type RegistrationUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendee?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    ticketType?: Prisma.TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationCreateManyTicketTypeInput = {
    id?: string;
    attendeeId: string;
    eventId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    status?: $Enums.RegistrationStatus;
    registeredAt?: Date | string;
    cancelledAt?: Date | string | null;
    expiresAt?: Date | string | null;
};
export type RegistrationUpdateWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    attendee?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutRegistrationsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutRegistrationNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutRegistrationNestedInput;
};
export type RegistrationUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationCountOutputType = {
    tickets: number;
};
export type RegistrationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tickets?: boolean | RegistrationCountOutputTypeCountTicketsArgs;
};
export type RegistrationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationCountOutputTypeSelect<ExtArgs> | null;
};
export type RegistrationCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
export type RegistrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    registeredAt?: boolean;
    cancelledAt?: boolean;
    expiresAt?: boolean;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Registration$paymentArgs<ExtArgs>;
    tickets?: boolean | Prisma.Registration$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegistrationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    registeredAt?: boolean;
    cancelledAt?: boolean;
    expiresAt?: boolean;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    registeredAt?: boolean;
    cancelledAt?: boolean;
    expiresAt?: boolean;
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectScalar = {
    id?: boolean;
    attendeeId?: boolean;
    eventId?: boolean;
    ticketTypeId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    status?: boolean;
    registeredAt?: boolean;
    cancelledAt?: boolean;
    expiresAt?: boolean;
};
export type RegistrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attendeeId" | "eventId" | "ticketTypeId" | "quantity" | "unitPrice" | "totalPrice" | "status" | "registeredAt" | "cancelledAt" | "expiresAt", ExtArgs["result"]["registration"]>;
export type RegistrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Registration$paymentArgs<ExtArgs>;
    tickets?: boolean | Prisma.Registration$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegistrationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
};
export type RegistrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    ticketType?: boolean | Prisma.TicketTypeDefaultArgs<ExtArgs>;
};
export type $RegistrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Registration";
    objects: {
        attendee: Prisma.$UserPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        ticketType: Prisma.$TicketTypePayload<ExtArgs>;
        payment: Prisma.$PaymentPayload<ExtArgs> | null;
        tickets: Prisma.$TicketPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attendeeId: string;
        eventId: string;
        ticketTypeId: string;
        quantity: number;
        unitPrice: number;
        totalPrice: number;
        status: $Enums.RegistrationStatus;
        registeredAt: Date;
        cancelledAt: Date | null;
        expiresAt: Date | null;
    }, ExtArgs["result"]["registration"]>;
    composites: {};
};
export type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegistrationPayload, S>;
export type RegistrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistrationCountAggregateInputType | true;
};
export interface RegistrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Registration'];
        meta: {
            name: 'Registration';
        };
    };
    findUnique<T extends RegistrationFindUniqueArgs>(args: Prisma.SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegistrationFindFirstArgs>(args?: Prisma.SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegistrationFindManyArgs>(args?: Prisma.SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegistrationCreateArgs>(args: Prisma.SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegistrationCreateManyArgs>(args?: Prisma.SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegistrationDeleteArgs>(args: Prisma.SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegistrationUpdateArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegistrationUpdateManyArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegistrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegistrationUpsertArgs>(args: Prisma.SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegistrationCountArgs>(args?: Prisma.Subset<T, RegistrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistrationCountAggregateOutputType> : number>;
    aggregate<T extends RegistrationAggregateArgs>(args: Prisma.Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>;
    groupBy<T extends RegistrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegistrationGroupByArgs['orderBy'];
    } : {
        orderBy?: RegistrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegistrationFieldRefs;
}
export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attendee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ticketType<T extends Prisma.TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TicketTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.Registration$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Registration$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tickets<T extends Prisma.Registration$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Registration$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegistrationFieldRefs {
    readonly id: Prisma.FieldRef<"Registration", 'String'>;
    readonly attendeeId: Prisma.FieldRef<"Registration", 'String'>;
    readonly eventId: Prisma.FieldRef<"Registration", 'String'>;
    readonly ticketTypeId: Prisma.FieldRef<"Registration", 'String'>;
    readonly quantity: Prisma.FieldRef<"Registration", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"Registration", 'Int'>;
    readonly totalPrice: Prisma.FieldRef<"Registration", 'Int'>;
    readonly status: Prisma.FieldRef<"Registration", 'RegistrationStatus'>;
    readonly registeredAt: Prisma.FieldRef<"Registration", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"Registration", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Registration", 'DateTime'>;
}
export type RegistrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationScalarFieldEnum | Prisma.RegistrationScalarFieldEnum[];
};
export type RegistrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationScalarFieldEnum | Prisma.RegistrationScalarFieldEnum[];
};
export type RegistrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationScalarFieldEnum | Prisma.RegistrationScalarFieldEnum[];
};
export type RegistrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationCreateInput, Prisma.RegistrationUncheckedCreateInput>;
};
export type RegistrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegistrationCreateManyInput | Prisma.RegistrationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegistrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    data: Prisma.RegistrationCreateManyInput | Prisma.RegistrationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegistrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegistrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationUpdateInput, Prisma.RegistrationUncheckedUpdateInput>;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyInput>;
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
};
export type RegistrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyInput>;
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
    include?: Prisma.RegistrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegistrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateInput, Prisma.RegistrationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegistrationUpdateInput, Prisma.RegistrationUncheckedUpdateInput>;
};
export type RegistrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
};
export type Registration$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
};
export type Registration$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
};
