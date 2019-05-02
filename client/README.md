
 각 구현한 부분에 대한 설명

 테이블의 안에 있는 내용을 불러오는 방법
 <tbody> { this.state.customers? filteredComponents(this.state.customers): "로딩 중"}    </tbody>

>> customers는 외부 데이터베이스에서 받아오는 값으로 만약 있을 경우 filterComponents함수를 실행하고 없을 경우 아직 불러오는 중이기에 "로딩중"을 출력

 componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

componentDidMount() 는 render가 끝나고 나서 발동되는 함수로 주로 외부의 api를 불러오는 용도로 사용한다. 
 this.timer 로 20초주기로 progress를 구현해서 로딩바를 구현할 생각이었으나 material을 찾지못해 문제가 생겨서 다음에 하는걸로
 callapi()의 함수를 호출하는데 비동기 함수이므로 성공했을 경우의 then과 실패의 경우인 catch로 나누어서 예약을 걸어둔다.
 성공햇을 경우 받아온 데이터를 res라는 이름으로 받아서 customers에 넣는다.

callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
callApi 함수를 async() 함수로 비동기화 만드는 목적 1개 그리고 await 을 사용하기 위해서가 있다.
 자바스크립트는 비동기함수가 위에서 선언이 되더라도 밑에 동기적인 내용이 먼저 실행하게 된다. await은 그 비동기 함수가 끝날 떄 까지 밑의 내용을 실행 못하도록 기다리라는 뜻의 기능이다.


## 고객 검색 기능의 input 태그
<input type = "text" placeholder ="고객검색하기"
          name = "searchKeyword"
          value = {this.state.searchKeyword}
          onChange ={this.handleValueChange}></input>
>> input태그를 넣으면서 내용이 바뀌게 될경우 handleValueChange라는 함수를 불러옴

 handleValueChange = (e) =>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
## 이벤트가 발생할경우 다음 nextState를 만들어서 name의 부분을 input에서 발생한 밸류값을 집어넣고 state를 갱신함