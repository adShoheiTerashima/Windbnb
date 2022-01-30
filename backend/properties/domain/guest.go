package domain

/*
* いわゆる値オブジェクト
* 元データはguestでまとめられてるけど、宿泊施設で子供と大人が分かれていないとかは業務ドメイン上ありえない
* 細かい年齢や乳児幼児設定はあるが、今回はUIに合わせてadult, childの２種類で
 */

// Guest
type Guest struct {
	Adult uint
	Child uint
}

// NewGuest インスタンス生成
func NewGuest(guest Guest) *Guest {
	return &Guest{
		Adult: guest.Adult,
		Child: guest.Child,
	}
}
