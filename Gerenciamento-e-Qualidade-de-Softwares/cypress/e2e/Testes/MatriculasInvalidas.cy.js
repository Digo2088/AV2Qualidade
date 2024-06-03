describe('Consulta de Dados de Matrícula Inválida', () => {
  it('Deve retornar uma mensagem de erro ao informar um número de matrícula inválido', () => {
  
    const matriculasInvalidas = ['1', '99', 'XPTO123', '999999999999'];
    
    matriculasInvalidas.forEach(numeroMatricula => {
    
      cy.request({
        method: 'GET',
        url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
        headers: {
          'X-API-KEY': 'unime-qualidade-oficial2'
        },
        failOnStatusCode: false 
      }).then((response) => {
       
        expect(response.status).to.eq(400);
        
        expect(response.body).to.have.property('mensagem', 'A matrícula informada não parece ser válida!');
      });
    });
  });
});
