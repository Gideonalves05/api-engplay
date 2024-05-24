// form/form.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormService {
  constructor() {}

  processResponses(userId: string, responses: any) {
    // Lógica para salvar as respostas do questionário para o usuário com o ID fornecido
    return { message: 'Respostas do questionário salvas com sucesso!' };
  }
}
