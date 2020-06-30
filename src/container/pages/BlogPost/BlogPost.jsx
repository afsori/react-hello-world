import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './BlogPost.css';
import Post from '../../../component/Post/Post';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: ''
        }
    }

    // GET API / menampilkan data
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
            .then(response => {
                // console.log(response.data);
                this.setState({
                    post: response.data
                })
            })
    }

    // handle Remove
    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(res => {
                this.getPostAPI();
            })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(result =>
        //         this.setState({
        //             post: result
        //         })
        //     )
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({
        //             post: response.data
        //         })
        //     })

        this.getPostAPI();
    }

    // Event untuk post DATA
    handleFormChange = (event) => {
        // console.log('form change input', event.target);
        let formBlogPostNew = { ...this.state.formBlogPost }
        formBlogPostNew[event.target.name] = event.target.value
        // mendapatkan value time
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        formBlogPostNew['id'] = timestamp
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('form blogPostForm', this.state.formBlogPost);
        })
    }

    // Event untuk Post DATA
    handleSubmit = () => {
        console.log(this.state.formBlogPost);
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Data Dummy</p>
                <div className="form-add-post">
                    <div>
                        <label htmlFor="title">title</label>
                    </div>
                    <div>
                        <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    </div>
                    <div>
                        <label htmlFor="body-content">Blog Content</label>
                    </div>
                    <div>
                        <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="body content" onChange={this.handleFormChange}></textarea>
                    </div>
                    <div>
                        <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>

                    </div>
                </div>
                {/* {
                    this.state.post.map(hasil => {
                        return <Post key={hasil.id} title={hasil.title} desc={hasil.body} />
                    })
                } */}
                {
                    this.state.post.map(hasil => {
                        return <Post key={hasil.id} data={hasil} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;