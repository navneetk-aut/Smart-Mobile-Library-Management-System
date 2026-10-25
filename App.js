import React, {useMemo, useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const initialBooks = [
  {id:'1',title:'Clean Code',author:'Robert C. Martin',category:'Software Engineering',available:true},
  {id:'2',title:'Design Patterns',author:'Erich Gamma et al.',category:'Software Engineering',available:false},
  {id:'3',title:'Introduction to Algorithms',author:'Cormen et al.',category:'Computer Science',available:true},
  {id:'4',title:'Database System Concepts',author:'Silberschatz et al.',category:'Databases',available:true},
  {id:'5',title:'Computer Networking',author:'Kurose and Ross',category:'Networking',available:false},
];
const dueDate = () => {const d=new Date();d.setDate(d.getDate()+14);return d.toISOString().slice(0,10)};
export default function App(){
  const [books,setBooks]=useState(initialBooks);
  const [loans,setLoans]=useState([]);
  const [reservations,setReservations]=useState([]);
  const [query,setQuery]=useState('');
  const [tab,setTab]=useState('Catalog');
  const [selected,setSelected]=useState(null);
  const filtered=useMemo(()=>books.filter(b=>`${b.title} ${b.author} ${b.category}`.toLowerCase().includes(query.toLowerCase())),[books,query]);
  const borrow=b=>{if(!b.available)return;setBooks(x=>x.map(v=>v.id===b.id?{...v,available:false}:v));setLoans(x=>[...x,{...b,due:dueDate()}]);setSelected(null);Alert.alert('Borrowed',`Due date: ${dueDate()}`)};
  const reserve=b=>{if(reservations.some(x=>x.id===b.id))return Alert.alert('Already reserved');setReservations(x=>[...x,b]);setSelected(null);Alert.alert('Reserved','Your reservation is saved on this device.');};
  const returnBook=b=>{setLoans(x=>x.filter(v=>v.id!==b.id));setBooks(x=>x.map(v=>v.id===b.id?{...v,available:true}:v));};
  const Button=({label,onPress})=><TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.buttonText}>{label}</Text></TouchableOpacity>;
  const Book=({book})=><TouchableOpacity style={styles.book} onPress={()=>setSelected(book)}><Text style={styles.bookTitle}>{book.title}</Text><Text>{book.author} · {book.category}</Text><Text style={{color:book.available?'#087f5b':'#b45309',marginTop:5}}>{book.available?'Available':'Unavailable'}</Text></TouchableOpacity>;
  return <SafeAreaView style={styles.container}><StatusBar style="dark"/><Text style={styles.heading}>Smart Mobile Library</Text><Text style={styles.subtitle}>Student prototype · local demo data</Text><View style={styles.tabs}>{['Catalog','My Library','Reservations'].map(t=><TouchableOpacity key={t} onPress={()=>{setTab(t);setSelected(null)}} style={[styles.tab,tab===t&&styles.activeTab]}><Text style={{fontWeight:'600',color:tab===t?'white':'#24446c'}}>{t}</Text></TouchableOpacity>)}</View>
  {selected?<ScrollView style={styles.content}><Button label="← Back" onPress={()=>setSelected(null)}/><Text style={styles.detailTitle}>{selected.title}</Text><Text>Author: {selected.author}</Text><Text>Category: {selected.category}</Text><Text>Availability: {books.find(x=>x.id===selected.id)?.available?'Available':'Unavailable'}</Text><Button label={books.find(x=>x.id===selected.id)?.available?'Borrow book':'Reserve book'} onPress={()=>books.find(x=>x.id===selected.id)?.available?borrow(selected):reserve(selected)}/></ScrollView>:
  tab==='Catalog'?<View style={styles.content}><TextInput style={styles.input} placeholder="Search title, author, category" value={query} onChangeText={setQuery}/><FlatList data={filtered} keyExtractor={b=>b.id} renderItem={({item})=><Book book={item}/>} ListEmptyComponent={<Text>No matching books.</Text>}/></View>:
  tab==='My Library'?<View style={styles.content}><Text style={styles.section}>Borrowed books ({loans.length})</Text><FlatList data={loans} keyExtractor={b=>b.id} renderItem={({item})=><View style={styles.book}><Text style={styles.bookTitle}>{item.title}</Text><Text>Due: {item.due}</Text><Button label="Return book" onPress={()=>returnBook(item)}/></View>} ListEmptyComponent={<Text>No borrowed books yet.</Text>}/></View>:
  <View style={styles.content}><Text style={styles.section}>Reservations ({reservations.length})</Text><FlatList data={reservations} keyExtractor={b=>b.id} renderItem={({item})=><View style={styles.book}><Text style={styles.bookTitle}>{item.title}</Text><Text>Reserved locally</Text><Button label="Cancel reservation" onPress={()=>setReservations(x=>x.filter(v=>v.id!==item.id))}/></View>} ListEmptyComponent={<Text>No reservations yet.</Text>}/></View>}
  <Text style={styles.footer}>Demo only: changes reset when the app restarts. No authentication or backend yet.</Text></SafeAreaView>
}
const styles=StyleSheet.create({container:{flex:1,backgroundColor:'#f5f7fb',paddingTop:35},heading:{fontSize:25,fontWeight:'bold',color:'#17365d',marginHorizontal:18},subtitle:{color:'#64748b',marginHorizontal:18,marginTop:4,marginBottom:15},tabs:{flexDirection:'row',marginHorizontal:12,marginBottom:12},tab:{flex:1,alignItems:'center',padding:11,borderRadius:9},activeTab:{backgroundColor:'#17365d'},content:{flex:1,paddingHorizontal:16},input:{backgroundColor:'white',borderColor:'#cbd5e1',borderWidth:1,borderRadius:10,padding:12,marginBottom:12},book:{backgroundColor:'white',padding:16,borderRadius:12,marginBottom:10,borderWidth:1,borderColor:'#e2e8f0'},bookTitle:{fontSize:17,fontWeight:'700',color:'#17365d',marginBottom:5},button:{backgroundColor:'#245ea8',borderRadius:9,padding:12,alignItems:'center',marginTop:12,marginBottom:10},buttonText:{color:'white',fontWeight:'700'},section:{fontSize:19,fontWeight:'700',marginBottom:14},detailTitle:{fontSize:23,fontWeight:'bold',marginVertical:15},footer:{fontSize:11,textAlign:'center',color:'#64748b',padding:9}});
