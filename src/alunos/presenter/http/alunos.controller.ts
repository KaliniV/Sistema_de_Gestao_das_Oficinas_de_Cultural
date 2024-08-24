import { Controller, Post, Body } from '@nestjs/common';
import { AlunosService } from 'src/alunos/application/alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

// a responsabilidade do controller é receber a requisição e responder,
// a logica não devera ser encontrada no controller, utilizamos validações.
// createAlunoDto - camada intermediaria objeto que so tem propriedades
// costuma ter as mesmas coisas que o aluno,
@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  cadastrar(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.cadastrar(createAlunoDto);
  }
}
