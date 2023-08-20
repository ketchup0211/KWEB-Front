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
  const username = document.createElement('p');
  username.classList.add('username');
  username.innerText = post.username;
  postElement.appendChild(username);

  const image = document.createElement('img');
  image.classList.add('img');
  image.alt = 'post img';
  image.src = post.image;
  postElement.appendChild(image);

  const likes = document.createElement('p');
  likes.classList.add('likes');
  likes.innerText = post.likes;
  postElement.appendChild(likes);

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = post.description;
  postElement.appendChild(description);

  return postElement;
}

/*# 1.3 상단 네비게이션 바 */
function openKweb() {
  open('https://kwebofficial.com', 'KWEB');
}

/*# 1.3 상단 네비게이션 바 */
//function sortPost() {}

// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  /*# 1.3 상단 네비게이션 바 */
  document.getElementById("kweb-homepage").addEventListener('click', openKweb);
  //document.getElementById("sort").addEventListener('click', sortPost);

  /*# 1.4 TOP버튼 구현*/

  /*# 1.2 createPost로 만든 post를 postsContainer에 하나씩 넣는 코드*/
  POSTS.forEach((element)=>{
    let postElement = createPost(element);
    postsContainer.appendChild(postElement);
  });
}

main();