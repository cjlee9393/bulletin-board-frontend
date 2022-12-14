import styled from "styled-components";
import { Button } from "./Button";
import { useWriter } from "./hook-utils/hooks";
import { useContext } from "react";

import { WriterContext } from './contexts/WriterContext';

const CommentListItemBase = styled.div`
    background-color: white;
    padding: 15px;
    margin-bottom: 1px;
`

const CommentListItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserNameWrap = styled.div`
    font: 1.1em;
    font-weight: bold;
    margin-bottom: 5px;    
`

const ContentWrap = styled.div`
`

const ButtonWrap = styled.div`
    display: flex;
`

export const CommentListItem = ({ 
    comment,
    onClickEdit,
    onClickDelete,
}) => {    
    const {writer} = useContext(WriterContext);
    const checkCommentWriter = (writer, comment) => {
        return (writer.wid == comment.wid)
    }

    return (
        <CommentListItemBase>
            <CommentListItemHeader>
                <UserNameWrap>{comment.username}</UserNameWrap>
                <ButtonWrap>
                    {checkCommentWriter(writer, comment) &&
                        <Button 
                            buttonText={'수정'} 
                            imgFileName={'edit.png'} 
                            onclick={() => onClickEdit(comment)} 
                        />}
                    {checkCommentWriter(writer, comment) && 
                        <Button 
                            buttonText={'삭제'} 
                            imgFileName={'delete.png'} 
                            onclick={() => onClickDelete(comment.cid)} 
                    />}
                </ButtonWrap>
            </CommentListItemHeader>
            <ContentWrap>{comment.content}</ContentWrap>
        </CommentListItemBase>
    )
}