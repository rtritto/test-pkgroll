export const autoloadRoutes = ({
  parameter1
}: {
  /**
    * Test
    * @default true
    */
  parameter1?: string
}) => {
  console.log('parameter1:', parameter1)
  return true
}