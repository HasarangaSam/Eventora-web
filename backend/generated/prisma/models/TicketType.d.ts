import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TicketTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$TicketTypePayload>;
export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null;
    _avg: TicketTypeAvgAggregateOutputType | null;
    _sum: TicketTypeSumAggregateOutputType | null;
    _min: TicketTypeMinAggregateOutputType | null;
    _max: TicketTypeMaxAggregateOutputType | null;
};
export type TicketTypeAvgAggregateOutputType = {
    price: number | null;
    quantity: number | null;
    soldQuantity: number | null;
};
export type TicketTypeSumAggregateOutputType = {
    price: number | null;
    quantity: number | null;
    soldQuantity: number | null;
};
export type TicketTypeMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    soldQuantity: number | null;
    salesStart: Date | null;
    salesEnd: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TicketTypeMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    quantity: number | null;
    soldQuantity: number | null;
    salesStart: Date | null;
    salesEnd: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TicketTypeCountAggregateOutputType = {
    id: number;
    eventId: number;
    name: number;
    description: number;
    price: number;
    quantity: number;
    soldQuantity: number;
    salesStart: number;
    salesEnd: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TicketTypeAvgAggregateInputType = {
    price?: true;
    quantity?: true;
    soldQuantity?: true;
};
export type TicketTypeSumAggregateInputType = {
    price?: true;
    quantity?: true;
    soldQuantity?: true;
};
export type TicketTypeMinAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    soldQuantity?: true;
    salesStart?: true;
    salesEnd?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TicketTypeMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    soldQuantity?: true;
    salesStart?: true;
    salesEnd?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TicketTypeCountAggregateInputType = {
    id?: true;
    eventId?: true;
    name?: true;
    description?: true;
    price?: true;
    quantity?: true;
    soldQuantity?: true;
    salesStart?: true;
    salesEnd?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TicketTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithRelationInput | Prisma.TicketTypeOrderByWithRelationInput[];
    cursor?: Prisma.TicketTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TicketTypeCountAggregateInputType;
    _avg?: TicketTypeAvgAggregateInputType;
    _sum?: TicketTypeSumAggregateInputType;
    _min?: TicketTypeMinAggregateInputType;
    _max?: TicketTypeMaxAggregateInputType;
};
export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicketType[P]> : Prisma.GetScalarType<T[P], AggregateTicketType[P]>;
};
export type TicketTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithAggregationInput | Prisma.TicketTypeOrderByWithAggregationInput[];
    by: Prisma.TicketTypeScalarFieldEnum[] | Prisma.TicketTypeScalarFieldEnum;
    having?: Prisma.TicketTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketTypeCountAggregateInputType | true;
    _avg?: TicketTypeAvgAggregateInputType;
    _sum?: TicketTypeSumAggregateInputType;
    _min?: TicketTypeMinAggregateInputType;
    _max?: TicketTypeMaxAggregateInputType;
};
export type TicketTypeGroupByOutputType = {
    id: string;
    eventId: string;
    name: string;
    description: string | null;
    price: number;
    quantity: number;
    soldQuantity: number;
    salesStart: Date | null;
    salesEnd: Date | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TicketTypeCountAggregateOutputType | null;
    _avg: TicketTypeAvgAggregateOutputType | null;
    _sum: TicketTypeSumAggregateOutputType | null;
    _min: TicketTypeMinAggregateOutputType | null;
    _max: TicketTypeMaxAggregateOutputType | null;
};
export type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketTypeGroupByOutputType[P]>;
}>>;
export type TicketTypeWhereInput = {
    AND?: Prisma.TicketTypeWhereInput | Prisma.TicketTypeWhereInput[];
    OR?: Prisma.TicketTypeWhereInput[];
    NOT?: Prisma.TicketTypeWhereInput | Prisma.TicketTypeWhereInput[];
    id?: Prisma.StringFilter<"TicketType"> | string;
    eventId?: Prisma.StringFilter<"TicketType"> | string;
    name?: Prisma.StringFilter<"TicketType"> | string;
    description?: Prisma.StringNullableFilter<"TicketType"> | string | null;
    price?: Prisma.IntFilter<"TicketType"> | number;
    quantity?: Prisma.IntFilter<"TicketType"> | number;
    soldQuantity?: Prisma.IntFilter<"TicketType"> | number;
    salesStart?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    salesEnd?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"TicketType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    registrations?: Prisma.RegistrationListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
};
export type TicketTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
    salesStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    registrations?: Prisma.RegistrationOrderByRelationAggregateInput;
    tickets?: Prisma.TicketOrderByRelationAggregateInput;
};
export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_name?: Prisma.TicketTypeEventIdNameCompoundUniqueInput;
    AND?: Prisma.TicketTypeWhereInput | Prisma.TicketTypeWhereInput[];
    OR?: Prisma.TicketTypeWhereInput[];
    NOT?: Prisma.TicketTypeWhereInput | Prisma.TicketTypeWhereInput[];
    eventId?: Prisma.StringFilter<"TicketType"> | string;
    name?: Prisma.StringFilter<"TicketType"> | string;
    description?: Prisma.StringNullableFilter<"TicketType"> | string | null;
    price?: Prisma.IntFilter<"TicketType"> | number;
    quantity?: Prisma.IntFilter<"TicketType"> | number;
    soldQuantity?: Prisma.IntFilter<"TicketType"> | number;
    salesStart?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    salesEnd?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"TicketType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    registrations?: Prisma.RegistrationListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
}, "id" | "eventId_name">;
export type TicketTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
    salesStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TicketTypeCountOrderByAggregateInput;
    _avg?: Prisma.TicketTypeAvgOrderByAggregateInput;
    _max?: Prisma.TicketTypeMaxOrderByAggregateInput;
    _min?: Prisma.TicketTypeMinOrderByAggregateInput;
    _sum?: Prisma.TicketTypeSumOrderByAggregateInput;
};
export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.TicketTypeScalarWhereWithAggregatesInput | Prisma.TicketTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.TicketTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TicketTypeScalarWhereWithAggregatesInput | Prisma.TicketTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TicketType"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"TicketType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TicketType"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"TicketType"> | string | null;
    price?: Prisma.IntWithAggregatesFilter<"TicketType"> | number;
    quantity?: Prisma.IntWithAggregatesFilter<"TicketType"> | number;
    soldQuantity?: Prisma.IntWithAggregatesFilter<"TicketType"> | number;
    salesStart?: Prisma.DateTimeNullableWithAggregatesFilter<"TicketType"> | Date | string | null;
    salesEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"TicketType"> | Date | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"TicketType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TicketType"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TicketType"> | Date | string;
};
export type TicketTypeCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutTicketTypesInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTicketTypeInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeUncheckedCreateInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTicketTypeInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketTypesNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutTicketTypeNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTicketTypeNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeCreateManyInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTypeListRelationFilter = {
    every?: Prisma.TicketTypeWhereInput;
    some?: Prisma.TicketTypeWhereInput;
    none?: Prisma.TicketTypeWhereInput;
};
export type TicketTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TicketTypeEventIdNameCompoundUniqueInput = {
    eventId: string;
    name: string;
};
export type TicketTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
    salesStart?: Prisma.SortOrder;
    salesEnd?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketTypeAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
};
export type TicketTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
    salesStart?: Prisma.SortOrder;
    salesEnd?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
    salesStart?: Prisma.SortOrder;
    salesEnd?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketTypeSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    soldQuantity?: Prisma.SortOrder;
};
export type TicketTypeScalarRelationFilter = {
    is?: Prisma.TicketTypeWhereInput;
    isNot?: Prisma.TicketTypeWhereInput;
};
export type TicketTypeCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput> | Prisma.TicketTypeCreateWithoutEventInput[] | Prisma.TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutEventInput | Prisma.TicketTypeCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TicketTypeCreateManyEventInputEnvelope;
    connect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
};
export type TicketTypeUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput> | Prisma.TicketTypeCreateWithoutEventInput[] | Prisma.TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutEventInput | Prisma.TicketTypeCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.TicketTypeCreateManyEventInputEnvelope;
    connect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
};
export type TicketTypeUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput> | Prisma.TicketTypeCreateWithoutEventInput[] | Prisma.TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutEventInput | Prisma.TicketTypeCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TicketTypeUpsertWithWhereUniqueWithoutEventInput | Prisma.TicketTypeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TicketTypeCreateManyEventInputEnvelope;
    set?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    disconnect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    delete?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    connect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    update?: Prisma.TicketTypeUpdateWithWhereUniqueWithoutEventInput | Prisma.TicketTypeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TicketTypeUpdateManyWithWhereWithoutEventInput | Prisma.TicketTypeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TicketTypeScalarWhereInput | Prisma.TicketTypeScalarWhereInput[];
};
export type TicketTypeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput> | Prisma.TicketTypeCreateWithoutEventInput[] | Prisma.TicketTypeUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutEventInput | Prisma.TicketTypeCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.TicketTypeUpsertWithWhereUniqueWithoutEventInput | Prisma.TicketTypeUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.TicketTypeCreateManyEventInputEnvelope;
    set?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    disconnect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    delete?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    connect?: Prisma.TicketTypeWhereUniqueInput | Prisma.TicketTypeWhereUniqueInput[];
    update?: Prisma.TicketTypeUpdateWithWhereUniqueWithoutEventInput | Prisma.TicketTypeUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.TicketTypeUpdateManyWithWhereWithoutEventInput | Prisma.TicketTypeUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.TicketTypeScalarWhereInput | Prisma.TicketTypeScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TicketTypeCreateNestedOneWithoutRegistrationsInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutRegistrationsInput;
    connect?: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutRegistrationsInput;
    upsert?: Prisma.TicketTypeUpsertWithoutRegistrationsInput;
    connect?: Prisma.TicketTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TicketTypeUpdateToOneWithWhereWithoutRegistrationsInput, Prisma.TicketTypeUpdateWithoutRegistrationsInput>, Prisma.TicketTypeUncheckedUpdateWithoutRegistrationsInput>;
};
export type TicketTypeCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutTicketsInput, Prisma.TicketTypeUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.TicketTypeCreateWithoutTicketsInput, Prisma.TicketTypeUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.TicketTypeCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.TicketTypeUpsertWithoutTicketsInput;
    connect?: Prisma.TicketTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TicketTypeUpdateToOneWithWhereWithoutTicketsInput, Prisma.TicketTypeUpdateWithoutTicketsInput>, Prisma.TicketTypeUncheckedUpdateWithoutTicketsInput>;
};
export type TicketTypeCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTicketTypeInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeUncheckedCreateWithoutEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTicketTypeInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeCreateOrConnectWithoutEventInput = {
    where: Prisma.TicketTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput>;
};
export type TicketTypeCreateManyEventInputEnvelope = {
    data: Prisma.TicketTypeCreateManyEventInput | Prisma.TicketTypeCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type TicketTypeUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.TicketTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketTypeUpdateWithoutEventInput, Prisma.TicketTypeUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutEventInput, Prisma.TicketTypeUncheckedCreateWithoutEventInput>;
};
export type TicketTypeUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.TicketTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketTypeUpdateWithoutEventInput, Prisma.TicketTypeUncheckedUpdateWithoutEventInput>;
};
export type TicketTypeUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.TicketTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketTypeUpdateManyMutationInput, Prisma.TicketTypeUncheckedUpdateManyWithoutEventInput>;
};
export type TicketTypeScalarWhereInput = {
    AND?: Prisma.TicketTypeScalarWhereInput | Prisma.TicketTypeScalarWhereInput[];
    OR?: Prisma.TicketTypeScalarWhereInput[];
    NOT?: Prisma.TicketTypeScalarWhereInput | Prisma.TicketTypeScalarWhereInput[];
    id?: Prisma.StringFilter<"TicketType"> | string;
    eventId?: Prisma.StringFilter<"TicketType"> | string;
    name?: Prisma.StringFilter<"TicketType"> | string;
    description?: Prisma.StringNullableFilter<"TicketType"> | string | null;
    price?: Prisma.IntFilter<"TicketType"> | number;
    quantity?: Prisma.IntFilter<"TicketType"> | number;
    soldQuantity?: Prisma.IntFilter<"TicketType"> | number;
    salesStart?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    salesEnd?: Prisma.DateTimeNullableFilter<"TicketType"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"TicketType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TicketType"> | Date | string;
};
export type TicketTypeCreateWithoutRegistrationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutTicketTypesInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeUncheckedCreateWithoutRegistrationsInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeCreateOrConnectWithoutRegistrationsInput = {
    where: Prisma.TicketTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedCreateWithoutRegistrationsInput>;
};
export type TicketTypeUpsertWithoutRegistrationsInput = {
    update: Prisma.XOR<Prisma.TicketTypeUpdateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedUpdateWithoutRegistrationsInput>;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedCreateWithoutRegistrationsInput>;
    where?: Prisma.TicketTypeWhereInput;
};
export type TicketTypeUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: Prisma.TicketTypeWhereInput;
    data: Prisma.XOR<Prisma.TicketTypeUpdateWithoutRegistrationsInput, Prisma.TicketTypeUncheckedUpdateWithoutRegistrationsInput>;
};
export type TicketTypeUpdateWithoutRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketTypesNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeUncheckedUpdateWithoutRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeCreateWithoutTicketsInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutTicketTypesInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeUncheckedCreateWithoutTicketsInput = {
    id?: string;
    eventId: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTicketTypeInput;
};
export type TicketTypeCreateOrConnectWithoutTicketsInput = {
    where: Prisma.TicketTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutTicketsInput, Prisma.TicketTypeUncheckedCreateWithoutTicketsInput>;
};
export type TicketTypeUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.TicketTypeUpdateWithoutTicketsInput, Prisma.TicketTypeUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.TicketTypeCreateWithoutTicketsInput, Prisma.TicketTypeUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.TicketTypeWhereInput;
};
export type TicketTypeUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.TicketTypeWhereInput;
    data: Prisma.XOR<Prisma.TicketTypeUpdateWithoutTicketsInput, Prisma.TicketTypeUncheckedUpdateWithoutTicketsInput>;
};
export type TicketTypeUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutTicketTypesNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeCreateManyEventInput = {
    id?: string;
    name: string;
    description?: string | null;
    price: number;
    quantity: number;
    soldQuantity?: number;
    salesStart?: Date | string | null;
    salesEnd?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketTypeUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUpdateManyWithoutTicketTypeNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTicketTypeNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutTicketTypeNestedInput;
};
export type TicketTypeUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    soldQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salesEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTypeCountOutputType = {
    registrations: number;
    tickets: number;
};
export type TicketTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    registrations?: boolean | TicketTypeCountOutputTypeCountRegistrationsArgs;
    tickets?: boolean | TicketTypeCountOutputTypeCountTicketsArgs;
};
export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type TicketTypeCountOutputTypeCountRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
};
export type TicketTypeCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
export type TicketTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    soldQuantity?: boolean;
    salesStart?: boolean;
    salesEnd?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    registrations?: boolean | Prisma.TicketType$registrationsArgs<ExtArgs>;
    tickets?: boolean | Prisma.TicketType$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.TicketTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticketType"]>;
export type TicketTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    soldQuantity?: boolean;
    salesStart?: boolean;
    salesEnd?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticketType"]>;
export type TicketTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    soldQuantity?: boolean;
    salesStart?: boolean;
    salesEnd?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticketType"]>;
export type TicketTypeSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    quantity?: boolean;
    soldQuantity?: boolean;
    salesStart?: boolean;
    salesEnd?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TicketTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "name" | "description" | "price" | "quantity" | "soldQuantity" | "salesStart" | "salesEnd" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketType"]>;
export type TicketTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    registrations?: boolean | Prisma.TicketType$registrationsArgs<ExtArgs>;
    tickets?: boolean | Prisma.TicketType$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.TicketTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TicketTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type TicketTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $TicketTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TicketType";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        registrations: Prisma.$RegistrationPayload<ExtArgs>[];
        tickets: Prisma.$TicketPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        name: string;
        description: string | null;
        price: number;
        quantity: number;
        soldQuantity: number;
        salesStart: Date | null;
        salesEnd: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ticketType"]>;
    composites: {};
};
export type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TicketTypePayload, S>;
export type TicketTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketTypeCountAggregateInputType | true;
};
export interface TicketTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TicketType'];
        meta: {
            name: 'TicketType';
        };
    };
    findUnique<T extends TicketTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TicketTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TicketTypeFindManyArgs>(args?: Prisma.SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TicketTypeCreateArgs>(args: Prisma.SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TicketTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TicketTypeDeleteArgs>(args: Prisma.SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TicketTypeUpdateArgs>(args: Prisma.SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TicketTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TicketTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TicketTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TicketTypeUpsertArgs>(args: Prisma.SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__TicketTypeClient<runtime.Types.Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TicketTypeCountArgs>(args?: Prisma.Subset<T, TicketTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketTypeCountAggregateOutputType> : number>;
    aggregate<T extends TicketTypeAggregateArgs>(args: Prisma.Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>;
    groupBy<T extends TicketTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TicketTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: TicketTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TicketTypeFieldRefs;
}
export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registrations<T extends Prisma.TicketType$registrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TicketType$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tickets<T extends Prisma.TicketType$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TicketType$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TicketTypeFieldRefs {
    readonly id: Prisma.FieldRef<"TicketType", 'String'>;
    readonly eventId: Prisma.FieldRef<"TicketType", 'String'>;
    readonly name: Prisma.FieldRef<"TicketType", 'String'>;
    readonly description: Prisma.FieldRef<"TicketType", 'String'>;
    readonly price: Prisma.FieldRef<"TicketType", 'Int'>;
    readonly quantity: Prisma.FieldRef<"TicketType", 'Int'>;
    readonly soldQuantity: Prisma.FieldRef<"TicketType", 'Int'>;
    readonly salesStart: Prisma.FieldRef<"TicketType", 'DateTime'>;
    readonly salesEnd: Prisma.FieldRef<"TicketType", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"TicketType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TicketType", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TicketType", 'DateTime'>;
}
export type TicketTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithRelationInput | Prisma.TicketTypeOrderByWithRelationInput[];
    cursor?: Prisma.TicketTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketTypeScalarFieldEnum | Prisma.TicketTypeScalarFieldEnum[];
};
export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithRelationInput | Prisma.TicketTypeOrderByWithRelationInput[];
    cursor?: Prisma.TicketTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketTypeScalarFieldEnum | Prisma.TicketTypeScalarFieldEnum[];
};
export type TicketTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where?: Prisma.TicketTypeWhereInput;
    orderBy?: Prisma.TicketTypeOrderByWithRelationInput | Prisma.TicketTypeOrderByWithRelationInput[];
    cursor?: Prisma.TicketTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketTypeScalarFieldEnum | Prisma.TicketTypeScalarFieldEnum[];
};
export type TicketTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketTypeCreateInput, Prisma.TicketTypeUncheckedCreateInput>;
};
export type TicketTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TicketTypeCreateManyInput | Prisma.TicketTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TicketTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    data: Prisma.TicketTypeCreateManyInput | Prisma.TicketTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TicketTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TicketTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketTypeUpdateInput, Prisma.TicketTypeUncheckedUpdateInput>;
    where: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TicketTypeUpdateManyMutationInput, Prisma.TicketTypeUncheckedUpdateManyInput>;
    where?: Prisma.TicketTypeWhereInput;
    limit?: number;
};
export type TicketTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketTypeUpdateManyMutationInput, Prisma.TicketTypeUncheckedUpdateManyInput>;
    where?: Prisma.TicketTypeWhereInput;
    limit?: number;
    include?: Prisma.TicketTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TicketTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where: Prisma.TicketTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketTypeCreateInput, Prisma.TicketTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TicketTypeUpdateInput, Prisma.TicketTypeUncheckedUpdateInput>;
};
export type TicketTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
    where: Prisma.TicketTypeWhereUniqueInput;
};
export type TicketTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketTypeWhereInput;
    limit?: number;
};
export type TicketType$registrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TicketType$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TicketTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketTypeSelect<ExtArgs> | null;
    omit?: Prisma.TicketTypeOmit<ExtArgs> | null;
    include?: Prisma.TicketTypeInclude<ExtArgs> | null;
};
