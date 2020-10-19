import React from "react";
import Post from "../posts/Post";
import SubscriptionForm from "../authors/SubscriptionForm";
import moment from "moment";
import "./Show.scss";

export default ({ post, previous, next, authorPosts, subscribedToAuthor, subscriptionForAuthor, subscriptionSuccess }) => {
    return (
        <div>
            <div className="single-post-show">
                <Post post={post}></Post>
                {!post.unlisted && (
                    <div>
                        <hr></hr>
                        {!post.author.newsletter_disabled && (
                            <div id="subscription-form" className="form-box centered">
                                <SubscriptionForm
                                    subscribedToAuthor={subscribedToAuthor}
                                    subscriptionForAuthor={subscriptionForAuthor}
                                    subscriptionSuccess={subscriptionSuccess}
                                    author={post.author}
                                >
                                </SubscriptionForm>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {post.page || (
                    <div id="single-post-footer">
                        <h3 className="more-from h3">
                            More from {post.author.title}
                            <div className="headline-separator"></div>
                        </h3>
                        <div className="previous-next-container">
                            {previous && (
                                <div className="previous card">
                                    <Post post={previous} truncate={true}></Post>  
                                </div>
                            )}
                            {next && (
                                <div className="next card">
                                    <Post post={next} truncate={true}></Post>  
                                </div>
                            )}
                        </div>
                    </div>
                )}
        </div>
    );
};
