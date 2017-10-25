import React from 'react';
import g from 'glamorous';
import {TextBlock, H2, Link} from './base';

const Img = g.img({
    flexShrink: 0,
    width: '66%',
    height: 400,
});
const Container = g.div({
    display: 'flex',
    alignItems: 'flex-start',
});
const Content = g.div({
    marginLeft: 20,
    // Align the top of the content with the image
    position: 'relative',
    top: -5,
});

const ProgramItem = ({imageUrl, imageAlt, title, content, link, linkName}) => (
    <div>
        <H2>{title}</H2>
        <Container>
            <Img src={imageUrl} alt={imageAlt} />
            <Content>
                <TextBlock>{content}</TextBlock>
                {link && linkName && <Link href={link}>{linkName}</Link>}
            </Content>
        </Container>
    </div>
);
export default ProgramItem;
