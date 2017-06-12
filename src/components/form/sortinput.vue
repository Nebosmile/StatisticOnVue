<template lang="html">
    <label for="gameFilter">Sort by
  	   <div class="inpContainer">
  		   <select name="sort" disabled class="form-control">
  			   <option selected="" value="startdate">Start Date</option>
  			   <option value="casinoID">Casino</option>
  			   <option value="UserID">Users</option>
  			   <option value="SessionID">Sessions</option>
  			   <option value="Game">Game</option>
  			   <option value="rounds">Rounds</option>
  			   <option value="total_bet_coins">Total bet coins</option>
  			   <option value="total_win_coins">Total win coins</option>
  			   <option value="incom_coins">Income coins</option>
  			   <option value="back_coins">back in coins</option>
  			   <option value="bet_cash">Total bet cash</option>
  			   <option value="win_cash">Total win cash</option>
  			   <option value="incom_cash">Income cash</option>
  			   <option value="back_cash">back in cash</option>
  			   <option value="currency">currency</option>
  		   </select>
  	    </div>
  	</label>
</template>

<script>
export default {
  name: 'sortinput'
}
</script>

<style lang="css">
</style>
