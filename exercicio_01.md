# Requisitos funcionais

- [ ] Deve ser possível cadastrar um aluno;

- [ ] Deve ser possível cadastrar um professor;

- [ ] Deve ser possível se matricular em cursos oferecidos;

- [ ] Deve ser possível criar um curso;

- [ ] Deve ser possível editar um curso;

- [ ] Deve ser possível listar os alunos matriculados em um determinado curso;

- [ ] Deve ser possível registrar a presença dos alunos nas aulas do curso.

> Que ordem de entrega, entrega mais valor?

Partindo da ideia que os dados ja existem, a entrega de mais valor seria matricular em cursos oferecidos. Pois ja existem professores cadastrados, alunos cadastrados e cursos criados.

> Que ordem de funcionalidade, entrega mais valor para as pessoas que vão utilizar o nossso sistema?

# Regra de negócios

- Pessoas a partir de 16 anos (professores e estudantes);
- Não devo persistir informação de data de nascimento no meu sistema-
- Não existe restrição para cadastro de pessoas de outras cidades, estados;
- Não pode haver duplicação de registro de alunos, cursos e professores - identificador unico;

- Um estudante só pode se matricular em um curso disponível;
- Um aluno pode se cadastrar em vários cursos, desde que o curso não seja no mesmo dia;
- Um professor pode ministrar em vários cursos;

- um curso pode ter um ou mais professores associados;

- Uma pessoa pode ser estudante e professor;
- Uma pessoa não pode ser aluna de uma turma em que é professora;

- Um número máximo de estudanes por curso são de 30 alunos;
- Um número minimo de estudantes por cursoé 1.

// para casa

- [ ] Lista de presença

- A presença dos alunos deve ser registrada a cada aula;
- Um aluno pode ser marcado como presente ou ausente em cada .
