const Comment = (props) => {
    const{item,number} = props
    return (
        <Comment>
            <Comment.Avatar src={item.image} />
            <Comment.Content>
            <Comment.Author as='a'>{item.name}</Comment.Author>
            <Comment.Text>{item.price} X {number}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default Comment