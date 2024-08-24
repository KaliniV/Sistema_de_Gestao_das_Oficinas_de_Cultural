import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  nome: string;

  @IsString()
  endereco: string;

  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  anoDeNascimento: number;
}
