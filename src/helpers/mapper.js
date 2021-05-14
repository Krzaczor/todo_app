export const mapper = ({ id, content, done, create }) => {
    return {
        id,
        content,
        done,
        create: new Date(create),
    };
}