import HomePage from './home-page'

const cb = 'home'

describe('HomePage', () => {
    let props, render

    beforeEach(() => {
        render = (changedProps = {}) => mount(<HomePage {...props} {...changedProps} />)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('displays if home page has been visited', () => {
        const component = render()
        expect(component.find(`.${cb}`).text()).toEqual('Long home page!(Footer is below the fold)')
    })
})
