describe('Consulta de Dados de Matrícula de Aluno Bolsista 50%', () => {
  it('Deve retornar os dados da matrícula e não deve informar o STATUS: Bolsista_50', () => {
   
    const numeroMatricula = '1113499';
    
    cy.request({
      method: 'GET',
      url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
      headers: {
        'X-API-KEY': 'unime-qualidade-oficial2'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      
      expect(response.body).to.have.property('id').that.equals(numeroMatricula);
      expect(response.body.courseName).to.exist;
      expect(response.body.tuition).to.exist;
      expect(response.body.student).to.exist;
      
      expect(response.body.tuition.status).to.not.eq('BOLSISTA_50');
    });
  });
});
