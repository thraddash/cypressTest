describe('1st cypress test', () => {
    it('Navigate to riotgame', () => {
        cy.visit('https://auth.riotgames.com/login#client_id=prod-xsso-leagueoflegends&code_challenge=HAQq9P-1mD_10NYWGaFTjFTvVx6rfTI_fcWZVHoZoHU&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.leagueoflegends.com%2Fredirect&response_type=code&scope=openid%20account&state=ae88422ef452a03fb0a1e48c62')
    })
    it('provide username', () => {
        cy.get('input[data-testid=input-username]').type(Cypress.env('username'))
    } )
    it('provide password', () => {
        cy.get('input[data-testid=input-password]').type(Cypress.env('password'))
    } )
    it('press enter to submit', () => {
        cy.get('[data-testid=btn-signin-submit]').click()
    } )
})