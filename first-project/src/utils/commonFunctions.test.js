import { MyFunc } from './commonFunctions'

it('Test Mu func', () => {
  expect(MyFunc(5)).toMatchSnapshot()
})
