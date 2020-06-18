import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://movieql.nomadcoders1.now.sh/"
});

export default client;