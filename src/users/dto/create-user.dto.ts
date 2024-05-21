import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    
    id: number
     
    @IsNotEmpty()
    firstName: string

    lastName: string
     
    email: string

    username: string

    password: string

}
