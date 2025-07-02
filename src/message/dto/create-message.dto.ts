import { IsInt, IsNotEmpty, MaxLength, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({ example: 'Hola mundo', description: 'Contenido del mensaje' })
  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  @MinLength(2, { message: 'El mensaje debe tener al menos 2 caracteres' })
  @MaxLength(500, { message: 'El mensaje no puede tener más de 500 caracteres' })
  content!: string;

  @IsInt()
  @ApiProperty({ example: 1, description: 'ID del usuario que envía el mensaje' })
  @Min(1)
  userId!: number;
}
