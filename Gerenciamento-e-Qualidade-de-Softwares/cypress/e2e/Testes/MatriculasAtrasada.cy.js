describe('Consulta de Dados de Matrícula com Pagamento em Atraso', () => {
    it('Deve retornar uma mensagem de erro ao informar um número de matrícula com pagamento em atraso', () => {
      
      const numeroMatricula = '5566778';
      
      cy.request({
        method: 'GET',
        url: `http://localhost:8080/v1/matriculas/${numeroMatricula}`,
        headers: {
          'X-API-KEY': 'unime-qualidade-oficial2'
        },
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(409); 
        
        expect(response.body).to.have.property('erro', 'Pagamento em atraso');
        expect(response.body).to.have.property('mensagem', 'A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!');
      });
    });
  });