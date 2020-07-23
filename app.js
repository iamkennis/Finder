//search input
const github = new Github;

const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if (userText !== '') {
        //Make HTTP CALL
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repos);
                }
            })
    } else {
     ui.clearProfile();
     ui.showRepo();
    }
});