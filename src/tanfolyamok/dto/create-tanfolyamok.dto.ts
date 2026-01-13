import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateTanfolyamokDto {
  @IsString()
  @IsNotEmpty()
  cim: string

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(200)
  ora_szam: number
  
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(300000)
  ar: number

  @IsDate()
  @IsNotEmpty()
  indulas_datum: Date
  
  @IsBoolean()
  @IsNotEmpty()
  online: boolean
}
