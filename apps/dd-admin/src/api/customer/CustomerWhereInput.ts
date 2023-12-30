import { StringFilter } from "../../util/StringFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  score?: BigIntNullableFilter;
};
