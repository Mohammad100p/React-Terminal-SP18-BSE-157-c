import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck, CardColumns } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BiDollar,BiPaperPlane } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import $ from "jquery"
import "../index.css"
const LandingPage = () => {
    $(document).ready(function(){
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        $('#stars li').on('mouseover', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
         
          // Now highlight all the stars that's not after the current hovered star
          $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
              $(this).addClass('hover');
            }
            else {
              $(this).removeClass('hover');
            }
          });
          
        }).on('mouseout', function(){
          $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
          });
        });
        
        
        /* 2. Action to perform on click */
        $('#stars li').on('click', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently selected
          var stars = $(this).parent().children('li.star');
          
          for (var i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
          }
          
          for (var i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
          }
          
          // JUST RESPONSE (Not needed)
          var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
          var msg = "";
          if (ratingValue > 1) {
              msg = "Thanks! You rated this " + ratingValue + " stars.";
          }
          else {
              msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
          }
          responseMessage(msg);
          
        });
        
        
      });
      
      
      function responseMessage(msg) {
        $('.success-box').fadeIn(200);  
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
      }
    const ratingChanged=(rating)=>{
        alert(`You have Given ${rating} Stars`);
    }
    return ( 
        <div>
        <Grid contained>
            <Grid contained style={{marginLeft:"100px",marginRight:"100px",backgroundColor:"whitesmoke"}}>
                <h1 style={{textAlign:"center",color:"black",marginTop:"30px"}}><strong>SELLERS</strong></h1>
                <hr/>
                <Navbar bg="light" variant="dark">
    <Nav className="mx-auto" >
      <Nav.Link href="/products" style={{color:"black"}}>T-Shirts</Nav.Link>
      <Nav.Link href="/products" style={{color:"black"}}>Hoodies</Nav.Link>
      <Nav.Link href="/products" style={{color:"black"}}>Products</Nav.Link>
      <Nav.Link href="/products" style={{color:"black"}}>Albums</Nav.Link>
      <Nav.Link href="/products" style={{color:"black"}}><AiFillShopping size="1rem"/></Nav.Link>
    </Nav>
  </Navbar>
            </Grid>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <CardDeck className="card">
            <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU"/>
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
            <h2>Showers</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 6900 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
                </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg" />
            <Card.Body>
            <h2>Laptops</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 7800 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        </CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" />
            <Card.Body>
            <h2>Headphones</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 6900 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
                </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 7800 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZc6KcgVqxqUx5K58-HA1qhBYJIPh_tY01aA&usqp=CAU" />
            <Card.Body>
            <h2>Dhamaka Deal</h2>
            <section class='rating-widget'>
        
        <div class='rating-stars text-center'>
          <ul id='stars'>
            <li class='star' title='Poor' data-value='1'>
            <i class="fa fa-star"></i>
            </li>
            <li class='star' title='Fair' data-value='2'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Good' data-value='3'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='Excellent' data-value='4'>
              <i class='fa fa-star fa-fw'></i>
            </li>
            <li class='star' title='WOW!!!' data-value='5'>
              <i class='fa fa-star fa-fw'></i>
            </li>
          </ul>
        </div>
        
        <div class='success-box'>
          <div class='clearfix'></div>
          <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
          <div class='text-message'></div>
          <div class='clearfix'></div>
        </div>
      
      </section>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        </CardColumns>
    </CardDeck>
        </Grid>
        </Grid>
        <section className="services py-5 text-center">
    <div className="container">
        <div className="row">
            
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <BiPaperPlane size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Free Shipping
                </h5>
                <p className="text-capitalize">
                    We provide Free Shipping on all orders above rs:2500/pkr
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                <BiDollar size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Cash on delivery
                </h5>
                <p className="text-capitalize">
                    100% Money Back Garauntees
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <BsFillPeopleFill size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Online Customer Support
                </h5>
                <p className="text-capitalize">
                    24/7 Serving Customers
                </p>
             </div>
             
        </div>
    </div>
</section>
        </div>
     );
}

 
export default LandingPage;