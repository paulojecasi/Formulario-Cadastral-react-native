import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 20, 
        
	},

	flex1: {
		flex: 1, 
	},
	
    cadastroCabecalho: {
		backgroundColor: 'rgb(130,149,174)',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},

	cadastroCabecalhoFont: {
		color: 'white',
		fontSize: 20, 
		fontWeight: 'bold', 
	},

	email_row: {
		flexDirection: 'row', 
		padding: 8, 
		alignItems: 'center',

	},
	email_label: {
		flex: 1,  
		fontSize: 20,
		fontWeight: 'bold',
	
	},
	email_textInput: {
		flex: 5, 
		fontSize: 18,
		borderWidth: 1, 
		borderColor: 'gray',
		borderRadius: 5,
		padding: 1,

	},

	senha_row: {
		flexDirection: 'row', 
		padding: 8, 
		alignItems: 'center',

	},
	senha_label: {
		flex: 1,  
		fontSize: 20,
		fontWeight: 'bold',
	
	},
	senha_textInput: {
		flex: 5, 
		fontSize: 18,
		borderWidth: 1, 
		borderColor: 'gray',
		borderRadius: 5,
		padding: 1,

	},
	
})