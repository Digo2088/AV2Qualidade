describe('Consulta de Dados de Matrícula de Aluno Bolsista 100%', () => {
  it('Deve retornar os dados da matrícula sem os dados da mensalidade para aluno bolsista 100%', () => {
   
    const numeroMatricula = '7890123';
    
    cy.request({
      method: 'GET',
      url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
      headers: {
        'X-API-KEY': 'unime-qualidade-oficial2'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      
      expect(response.body).to.have.property('id').that.equals(numeroMatricula);
      expect(response.body.tuition.status).to.eq("BOLSISTA_100");
      expect(response.body.tuition.status).to.not.eq('BOLSISTA_50');
      expect(response.body.tuition.amount).to.eq(0);
      expect(response.body.tuition.dueDate).to.eq(null);
      expect(response.body.tuition.formattedAmount).to.eq("R$ 0.00");
    });
  });
});
