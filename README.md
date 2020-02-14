# fontTester
## 구현한 이유
최근 UX/UI에서는 2013년 애플의 iOS7 발표 이후 현재까지 대세로 자리 잡은 과장된 디자인을 경계하고 모바일 플랫폼 환경에 최적화된 플랫 디자인이 트랜드의 중심에 있다.
따라서 폰트의 느낌으로 해당 컨텐츠의 이해를 높혀주는 일들이 많아 졌기 때문에 사용하고자 하는 폰트를 구글폰트에서 링크과 css를 복사하여 해당 입력란에 붙혀주기만 하면 내가 원하는 글자를 써서 해당 폰트를 바로바로 사용해 볼 수 있는 테스터기를 만들고 싶었다. 폰트사용 뿐만 아니라 크기,굵기,lineHeight까지 조절이 가능하다.
## 구현한 기능
1. 입력란에 모두 입력한 후에 submit 하고 나면 for문을 돌면서 fontSet의 key값에 label태그의 id값으로 접근하여 해당 input의 value값을 fontSet의 value값에 넣어준다.
<pre><code>
let fontSet = {
        FontSize: '',
        FontWeight: '',
        LineHeight: '',
        Link: '',
        Css: '',
}
for(let i = 0; i < inputEls.length; i++){
    fontSet[label[i].id] = inputEls[i].value;
}
</code></pre>
2. 넣어 준 값을 setAttribute로 style에 접근하여 입력한 값들을 할당시켜준다. 단, 폰트의 링크는 head에 할당으로 넣어주면 기존에 head 안에 있던 태그들이 지워지기 때문에 더해서 할당해준다. 
<pre><code>
textArea.setAttribute('style', fontSet.Css);
textArea.style.fontSize = fontSet.FontSize+'px';
textArea.style.fontWeight = fontSet.FontWeight;
textArea.style.lineHeight = fontSet.LineHeight+'px';
head.innerHTML += fontSet.Link;
</code></pre>
3. 기능을 추가로 구현하더라도 해당 label의 id 값과 fontSet의 key값만 일치시켜준다면 얼마든지 추가구현이 가능하다.

## 느낀 점
원래 구현 계획은 link에 몇가지 폰트들을 다운받아 넣어놓고 드롭다운형식의 라디오 버튼에 이미 등록되어있는 폰트들로만 구성하여 선택해서 테스트할 수 있는 테스터기를 구현하려고 했으나 그럼 테스트 할 수 있는 폰트가 한정되어 있고 사용성이 줄어들것 같아서 link값과 css값만 적으면 어떤 폰트도 다 사용가능할 수 있도록 사용성을 높혀 주었다. 
프론트엔드 개발자가 목표지만 프론트엔드 개발자 이더라도 이런 사소한 부분 부터 UX/UI를 충분히 생각하고 이해해야하고 밀접한 관계에 있다는걸 느꼈다.
