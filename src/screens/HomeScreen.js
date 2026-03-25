import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import Article from '../components/Article';
import { fetchNews } from '../api/news';
import { globalStyles } from '../styles';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    const data = await fetchNews();
    setArticles(data || []);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={globalStyles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Top Headlines</Text>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={({ item }) => <Article article={item} />}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={loadNews}
      />
    </View>
  );
};

export default HomeScreen;
