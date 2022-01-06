import React from 'react';
import './SinglePost.css';

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon fas fa-edit"></i>
						<i className="singlePostIcon fas fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Alif</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					eaque perferendis placeat, facere laudantium eligendi suscipit at
					quidem, expedita, fugiat totam aliquid voluptatibus fugit tenetur
					nihil voluptas. Aperiam, corporis ullam? Corrupti quis consequatur
					numquam eum corporis, assumenda et in consequuntur voluptates debitis,
					sapiente atque maiores fuga placeat quibusdam illum, dolore officia
					laboriosam amet saepe cupiditate fugit voluptatum. Id, odit neque
					praesentium unde perspiciatis adipisci excepturi at, nam fugit
					pariatur, ad cumque eos quod. Quisquam in magni repellat, dolore ex
					tempora debitis atque autem odit, vitae fuga velit facilis et
					recusandae dolor laborum corrupti nulla? Adipisci perspiciatis
					molestias dolor iste quo.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
