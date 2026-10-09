import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$EventSessionPayload>;
export type AggregateEventSession = {
    _count: EventSessionCountAggregateOutputType | null;
    _min: EventSessionMinAggregateOutputType | null;
    _max: EventSessionMaxAggregateOutputType | null;
};
export type EventSessionMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    title: string | null;
    description: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    venue: string | null;
    speakerName: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventSessionMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    title: string | null;
    description: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    venue: string | null;
    speakerName: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventSessionCountAggregateOutputType = {
    id: number;
    eventId: number;
    title: number;
    description: number;
    startsAt: number;
    endsAt: number;
    venue: number;
    speakerName: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventSessionMinAggregateInputType = {
    id?: true;
    eventId?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    venue?: true;
    speakerName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventSessionMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    venue?: true;
    speakerName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventSessionCountAggregateInputType = {
    id?: true;
    eventId?: true;
    title?: true;
    description?: true;
    startsAt?: true;
    endsAt?: true;
    venue?: true;
    speakerName?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventSessionWhereInput;
    orderBy?: Prisma.EventSessionOrderByWithRelationInput | Prisma.EventSessionOrderByWithRelationInput[];
    cursor?: Prisma.EventSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventSessionCountAggregateInputType;
    _min?: EventSessionMinAggregateInputType;
    _max?: EventSessionMaxAggregateInputType;
};
export type GetEventSessionAggregateType<T extends EventSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateEventSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventSession[P]> : Prisma.GetScalarType<T[P], AggregateEventSession[P]>;
};
export type EventSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventSessionWhereInput;
    orderBy?: Prisma.EventSessionOrderByWithAggregationInput | Prisma.EventSessionOrderByWithAggregationInput[];
    by: Prisma.EventSessionScalarFieldEnum[] | Prisma.EventSessionScalarFieldEnum;
    having?: Prisma.EventSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventSessionCountAggregateInputType | true;
    _min?: EventSessionMinAggregateInputType;
    _max?: EventSessionMaxAggregateInputType;
};
export type EventSessionGroupByOutputType = {
    id: string;
    eventId: string;
    title: string;
    description: string;
    startsAt: Date;
    endsAt: Date;
    venue: string | null;
    speakerName: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: EventSessionCountAggregateOutputType | null;
    _min: EventSessionMinAggregateOutputType | null;
    _max: EventSessionMaxAggregateOutputType | null;
};
export type GetEventSessionGroupByPayload<T extends EventSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventSessionGroupByOutputType[P]>;
}>>;
export type EventSessionWhereInput = {
    AND?: Prisma.EventSessionWhereInput | Prisma.EventSessionWhereInput[];
    OR?: Prisma.EventSessionWhereInput[];
    NOT?: Prisma.EventSessionWhereInput | Prisma.EventSessionWhereInput[];
    id?: Prisma.StringFilter<"EventSession"> | string;
    eventId?: Prisma.StringFilter<"EventSession"> | string;
    title?: Prisma.StringFilter<"EventSession"> | string;
    description?: Prisma.StringFilter<"EventSession"> | string;
    startsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    venue?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    speakerName?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    isActive?: Prisma.BoolFilter<"EventSession"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
};
export type EventSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    venue?: Prisma.SortOrderInput | Prisma.SortOrder;
    speakerName?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
};
export type EventSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EventSessionWhereInput | Prisma.EventSessionWhereInput[];
    OR?: Prisma.EventSessionWhereInput[];
    NOT?: Prisma.EventSessionWhereInput | Prisma.EventSessionWhereInput[];
    eventId?: Prisma.StringFilter<"EventSession"> | string;
    title?: Prisma.StringFilter<"EventSession"> | string;
    description?: Prisma.StringFilter<"EventSession"> | string;
    startsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    venue?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    speakerName?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    isActive?: Prisma.BoolFilter<"EventSession"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
}, "id">;
export type EventSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    venue?: Prisma.SortOrderInput | Prisma.SortOrder;
    speakerName?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventSessionCountOrderByAggregateInput;
    _max?: Prisma.EventSessionMaxOrderByAggregateInput;
    _min?: Prisma.EventSessionMinOrderByAggregateInput;
};
export type EventSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventSessionScalarWhereWithAggregatesInput | Prisma.EventSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventSessionScalarWhereWithAggregatesInput | Prisma.EventSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventSession"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventSession"> | string;
    title?: Prisma.StringWithAggregatesFilter<"EventSession"> | string;
    description?: Prisma.StringWithAggregatesFilter<"EventSession"> | string;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"EventSession"> | Date | string;
    endsAt?: Prisma.DateTimeWithAggregatesFilter<"EventSession"> | Date | string;
    venue?: Prisma.StringNullableWithAggregatesFilter<"EventSession"> | string | null;
    speakerName?: Prisma.StringNullableWithAggregatesFilter<"EventSession"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"EventSession"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventSession"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventSession"> | Date | string;
};
export type EventSessionCreateInput = {
    id?: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutSessionsInput;
};
export type EventSessionUncheckedCreateInput = {
    id?: string;
    eventId: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutSessionsNestedInput;
};
export type EventSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionCreateManyInput = {
    id?: string;
    eventId: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionListRelationFilter = {
    every?: Prisma.EventSessionWhereInput;
    some?: Prisma.EventSessionWhereInput;
    none?: Prisma.EventSessionWhereInput;
};
export type EventSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    speakerName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    speakerName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    speakerName?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventSessionCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput> | Prisma.EventSessionCreateWithoutEventInput[] | Prisma.EventSessionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventSessionCreateOrConnectWithoutEventInput | Prisma.EventSessionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventSessionCreateManyEventInputEnvelope;
    connect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
};
export type EventSessionUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput> | Prisma.EventSessionCreateWithoutEventInput[] | Prisma.EventSessionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventSessionCreateOrConnectWithoutEventInput | Prisma.EventSessionCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventSessionCreateManyEventInputEnvelope;
    connect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
};
export type EventSessionUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput> | Prisma.EventSessionCreateWithoutEventInput[] | Prisma.EventSessionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventSessionCreateOrConnectWithoutEventInput | Prisma.EventSessionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventSessionUpsertWithWhereUniqueWithoutEventInput | Prisma.EventSessionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventSessionCreateManyEventInputEnvelope;
    set?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    disconnect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    delete?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    connect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    update?: Prisma.EventSessionUpdateWithWhereUniqueWithoutEventInput | Prisma.EventSessionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventSessionUpdateManyWithWhereWithoutEventInput | Prisma.EventSessionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventSessionScalarWhereInput | Prisma.EventSessionScalarWhereInput[];
};
export type EventSessionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput> | Prisma.EventSessionCreateWithoutEventInput[] | Prisma.EventSessionUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventSessionCreateOrConnectWithoutEventInput | Prisma.EventSessionCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventSessionUpsertWithWhereUniqueWithoutEventInput | Prisma.EventSessionUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventSessionCreateManyEventInputEnvelope;
    set?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    disconnect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    delete?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    connect?: Prisma.EventSessionWhereUniqueInput | Prisma.EventSessionWhereUniqueInput[];
    update?: Prisma.EventSessionUpdateWithWhereUniqueWithoutEventInput | Prisma.EventSessionUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventSessionUpdateManyWithWhereWithoutEventInput | Prisma.EventSessionUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventSessionScalarWhereInput | Prisma.EventSessionScalarWhereInput[];
};
export type EventSessionCreateWithoutEventInput = {
    id?: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventSessionUncheckedCreateWithoutEventInput = {
    id?: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventSessionCreateOrConnectWithoutEventInput = {
    where: Prisma.EventSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput>;
};
export type EventSessionCreateManyEventInputEnvelope = {
    data: Prisma.EventSessionCreateManyEventInput | Prisma.EventSessionCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventSessionUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventSessionUpdateWithoutEventInput, Prisma.EventSessionUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventSessionCreateWithoutEventInput, Prisma.EventSessionUncheckedCreateWithoutEventInput>;
};
export type EventSessionUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventSessionUpdateWithoutEventInput, Prisma.EventSessionUncheckedUpdateWithoutEventInput>;
};
export type EventSessionUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.EventSessionUpdateManyMutationInput, Prisma.EventSessionUncheckedUpdateManyWithoutEventInput>;
};
export type EventSessionScalarWhereInput = {
    AND?: Prisma.EventSessionScalarWhereInput | Prisma.EventSessionScalarWhereInput[];
    OR?: Prisma.EventSessionScalarWhereInput[];
    NOT?: Prisma.EventSessionScalarWhereInput | Prisma.EventSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"EventSession"> | string;
    eventId?: Prisma.StringFilter<"EventSession"> | string;
    title?: Prisma.StringFilter<"EventSession"> | string;
    description?: Prisma.StringFilter<"EventSession"> | string;
    startsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    venue?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    speakerName?: Prisma.StringNullableFilter<"EventSession"> | string | null;
    isActive?: Prisma.BoolFilter<"EventSession"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventSession"> | Date | string;
};
export type EventSessionCreateManyEventInput = {
    id?: string;
    title: string;
    description: string;
    startsAt: Date | string;
    endsAt: Date | string;
    venue?: string | null;
    speakerName?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventSessionUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    speakerName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    venue?: boolean;
    speakerName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventSession"]>;
export type EventSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    venue?: boolean;
    speakerName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventSession"]>;
export type EventSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    venue?: boolean;
    speakerName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventSession"]>;
export type EventSessionSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    title?: boolean;
    description?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    venue?: boolean;
    speakerName?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "title" | "description" | "startsAt" | "endsAt" | "venue" | "speakerName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["eventSession"]>;
export type EventSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventSession";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        title: string;
        description: string;
        startsAt: Date;
        endsAt: Date;
        venue: string | null;
        speakerName: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventSession"]>;
    composites: {};
};
export type EventSessionGetPayload<S extends boolean | null | undefined | EventSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventSessionPayload, S>;
export type EventSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventSessionCountAggregateInputType | true;
};
export interface EventSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventSession'];
        meta: {
            name: 'EventSession';
        };
    };
    findUnique<T extends EventSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, EventSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, EventSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventSessionFindManyArgs>(args?: Prisma.SelectSubset<T, EventSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventSessionCreateArgs>(args: Prisma.SelectSubset<T, EventSessionCreateArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, EventSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventSessionDeleteArgs>(args: Prisma.SelectSubset<T, EventSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventSessionUpdateArgs>(args: Prisma.SelectSubset<T, EventSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, EventSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventSessionUpsertArgs>(args: Prisma.SelectSubset<T, EventSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__EventSessionClient<runtime.Types.Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventSessionCountArgs>(args?: Prisma.Subset<T, EventSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventSessionCountAggregateOutputType> : number>;
    aggregate<T extends EventSessionAggregateArgs>(args: Prisma.Subset<T, EventSessionAggregateArgs>): Prisma.PrismaPromise<GetEventSessionAggregateType<T>>;
    groupBy<T extends EventSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: EventSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventSessionFieldRefs;
}
export interface Prisma__EventSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventSessionFieldRefs {
    readonly id: Prisma.FieldRef<"EventSession", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventSession", 'String'>;
    readonly title: Prisma.FieldRef<"EventSession", 'String'>;
    readonly description: Prisma.FieldRef<"EventSession", 'String'>;
    readonly startsAt: Prisma.FieldRef<"EventSession", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"EventSession", 'DateTime'>;
    readonly venue: Prisma.FieldRef<"EventSession", 'String'>;
    readonly speakerName: Prisma.FieldRef<"EventSession", 'String'>;
    readonly isActive: Prisma.FieldRef<"EventSession", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"EventSession", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventSession", 'DateTime'>;
}
export type EventSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where: Prisma.EventSessionWhereUniqueInput;
};
export type EventSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where: Prisma.EventSessionWhereUniqueInput;
};
export type EventSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where?: Prisma.EventSessionWhereInput;
    orderBy?: Prisma.EventSessionOrderByWithRelationInput | Prisma.EventSessionOrderByWithRelationInput[];
    cursor?: Prisma.EventSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventSessionScalarFieldEnum | Prisma.EventSessionScalarFieldEnum[];
};
export type EventSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where?: Prisma.EventSessionWhereInput;
    orderBy?: Prisma.EventSessionOrderByWithRelationInput | Prisma.EventSessionOrderByWithRelationInput[];
    cursor?: Prisma.EventSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventSessionScalarFieldEnum | Prisma.EventSessionScalarFieldEnum[];
};
export type EventSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where?: Prisma.EventSessionWhereInput;
    orderBy?: Prisma.EventSessionOrderByWithRelationInput | Prisma.EventSessionOrderByWithRelationInput[];
    cursor?: Prisma.EventSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventSessionScalarFieldEnum | Prisma.EventSessionScalarFieldEnum[];
};
export type EventSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventSessionCreateInput, Prisma.EventSessionUncheckedCreateInput>;
};
export type EventSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventSessionCreateManyInput | Prisma.EventSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    data: Prisma.EventSessionCreateManyInput | Prisma.EventSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EventSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EventSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventSessionUpdateInput, Prisma.EventSessionUncheckedUpdateInput>;
    where: Prisma.EventSessionWhereUniqueInput;
};
export type EventSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventSessionUpdateManyMutationInput, Prisma.EventSessionUncheckedUpdateManyInput>;
    where?: Prisma.EventSessionWhereInput;
    limit?: number;
};
export type EventSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventSessionUpdateManyMutationInput, Prisma.EventSessionUncheckedUpdateManyInput>;
    where?: Prisma.EventSessionWhereInput;
    limit?: number;
    include?: Prisma.EventSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EventSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where: Prisma.EventSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventSessionCreateInput, Prisma.EventSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventSessionUpdateInput, Prisma.EventSessionUncheckedUpdateInput>;
};
export type EventSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
    where: Prisma.EventSessionWhereUniqueInput;
};
export type EventSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventSessionWhereInput;
    limit?: number;
};
export type EventSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSessionSelect<ExtArgs> | null;
    omit?: Prisma.EventSessionOmit<ExtArgs> | null;
    include?: Prisma.EventSessionInclude<ExtArgs> | null;
};
