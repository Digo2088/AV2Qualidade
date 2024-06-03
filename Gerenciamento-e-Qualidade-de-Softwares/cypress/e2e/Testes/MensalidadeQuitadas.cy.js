describe('Consulta de Dados de Matrícula com Todas as Mensalidades Quitadas', () => {
  it('Deve retornar os dados da matrícula sem a data de vencimento da mensalidade para um aluno com todas as mensalidades quitadas', () => {
   
    const numeroMatricula = '1122334';
    
    cy.request({
      method: 'GET',
      url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
      headers: {
        'X-API-KEY': 'unime-qualidade-oficial2'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      
      
      expect(response.body).to.have.property('id').that.equals(numeroMatricula);
      expect(response.body).to.have.property('courseName');
      expect(response.body).to.have.property('tuition');
  
      expect(response.body.tuition).to.have.property('status', 'CONTRATO_QUITADO');      
      expect(response.body.tuition.dueDate).to.be.null;

    });
  });
});
