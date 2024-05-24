// form/form.controller.ts
import { Controller, Post, Body, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { FormService } from './form.service';

@Controller('form/response')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post(':userId')
  async submitResponses(@Res() res: Response, @Param('userId') userId: string, @Body() responses: any) {
    // Lógica para salvar as respostas do questionário para o usuário com o ID fornecido
    await this.formService.processResponses(userId, responses);

    // Redirecionar o usuário para a página de cursos
    return res.redirect(307, '/courses');
  }
}
