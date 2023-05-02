import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab molestiae maxime voluptate soluta fugit nihil repellendus omnis quia iusto rem quas ratione, ducimus rerum numquam aut eum voluptates? Debitis modi, minima optio provident a quod ducimus doloremque nulla, impedit incidunt vitae laudantium. Quisquam perferendis reprehenderit temporibus culpa dolorem suscipit officia cumque non beatae ipsa blanditiis minus doloribus illo hic at velit illum optio quas minima consectetur excepturi, facere quod? Minus quae cupiditate aliquid! Voluptatem voluptatibus cum ullam sint, saepe veniam repudiandae aliquam dolor, magni quod accusamus blanditiis? Error non provident aperiam vitae nobis maiores officia eos sequi explicabo hic.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;