import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { CreateProductDto } from "./create-product.dto.js";

export class UpdateProductDto extends PartialType(CreateProductDto){
    @IsString()
    @IsOptional()
    @IsUUID()
    id?: string;



    
}
