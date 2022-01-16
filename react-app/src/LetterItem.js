class LetterItem {
    constructor(nickname, dueDate, data_index) {
        this.nickname = nickname;
        this.dueDate = dueDate;
        this.data_index = data_index;
    }

    render(){
        return(        <div className='gallery-item' data-index={this.data_index}>
        <span>이름 : {this.nickname}</span>
        <span>날짜 : {this.dueDate}</span>
    </div>);

    }
}

export default LetterItem;