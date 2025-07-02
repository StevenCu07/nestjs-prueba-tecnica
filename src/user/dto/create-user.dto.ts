import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Brandon', description: 'Nombre del usuario' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El nombre no debe superar 50 caracteres' })
  name!: string;

  @ApiProperty({ example: 'brandon@mail.com', description: 'Correo electrónico único' })
  @IsEmail({}, { message: 'Debe proporcionar un correo válido' })
  @MaxLength(100, { message: 'El correo no debe superar 100 caracteres' })
  email!: string;
}
