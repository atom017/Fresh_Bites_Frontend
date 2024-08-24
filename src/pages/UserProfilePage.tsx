import UserProfileForm from 'src/forms/user-profile-form/UserProfileForm'
import { useGetMyUser, useUpdateMyUser } from 'src/api/MyUserApi'

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateMyUser();

  if (isGetUserLoading) {
    return <span>Loading...</span>
  }

  if (!currentUser) {
    return <span>Unable to load user profile.</span>
  }



  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateUserLoading} />
  )
}

export default UserProfilePage