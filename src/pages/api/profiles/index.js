import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getServerSideProps() {
  const profiles = await prisma.profile.findMany()
  console.log('profiles = ', profiles)
  return {
    props: {
      initialProfiles: profiles,
    },
  }
}
