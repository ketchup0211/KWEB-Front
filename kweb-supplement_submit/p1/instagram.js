// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
];

function createPost(post) {
  const postElement = document.createElement("div");

  /* # 1.1 createPost 함수 구현*/
  postElement.classList.add('post');

  const profile = document.createElement('div');
  profile.classList.add('profile');

  const userProfile = document.createElement('div');
  userProfile.classList.add('userProfile');
  profile.appendChild(userProfile);

  const userName = document.createElement('p');
  userName.classList.add('userName');
  userName.innerText = post.username;
  profile.appendChild(userName);

  postElement.appendChild(profile);

  const image = document.createElement('img');
  image.classList.add('img');
  image.alt = 'post-img';
  image.src = post.image;
  postElement.appendChild(image);

  const like = document.createElement('div');
  like.classList.add('like');

  const likeImg = document.createElement('img');
  likeImg.classList.add('likeImg');
  likeImg.setAttribute('src', './img/heart.png');
  likeImg.setAttribute('alt', 'like');
  like.appendChild(likeImg);

  const likes = document.createElement('p');
  likes.classList.add('likes');
  likes.innerText = post.likes;
  like.appendChild(likes);

  postElement.appendChild(like);

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = post.description;
  postElement.appendChild(description);

  return postElement;
}

function openKweb() {
  open('https://kwebofficial.com', 'KWEB');
}

function sortPost() {
  const postsParent = document.getElementById('posts');
  const posts = document.getElementsByClassName('post');

  let postsLikes=[];
  for(let i=0; i<posts.length ; i++){
    postsLikes[i] = posts[i].querySelector('.likes').innerText;
  }
  postsLikes.sort();

  for(let i=0; i<postsLikes.length ; i++){
    for(let j=0; j<posts.length;j++){
      if(postsLikes[i] === posts[j].querySelector('.likes').innerText){
        postsParent.insertBefore(posts[j], postsParent.firstChild);
      }
    } 
  }
}

function moveTop() {
  const topPosition = document.getElementById("header").offsetTop;
  scrollTo({
    left : 0,
    top : topPosition,
    behavior : "smooth",
  })
}

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  document.getElementById("kweb-homepage").addEventListener('click', openKweb);
  document.getElementById("sort").addEventListener('click', sortPost);
  document.getElementById("top-button").addEventListener('click', moveTop);

  const logo = document.getElementById('logo');
  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './img/logo.png');
  logo.appendChild(logoImg);

  POSTS.forEach((element)=>{
    let postElement = createPost(element);
    postsContainer.appendChild(postElement);
  });
}

main();
