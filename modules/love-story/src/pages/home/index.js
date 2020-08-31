Page({
  data: {
    info: {},
    properties: [],
    i18n: {
      nickName: '昵称',
      gender: '性别',
      country: '国家',
      province: '省份',
      city: '城市',
      male: '男',
      female: '女',
    },
  },
  async onLoad() {
    try {
      const { userInfo } = await wx.getUserInfo();
      this.setData({
        info: { avatar: userInfo.avatarUrl },
        properties: this.formatProperties(userInfo),
      });
    } catch (e) {
      console.log(e);
    }
  },
  formatProperties({ nickName, gender, country, province, city }) {
    const { i18n } = this.data;
    return [
      { label: i18n.nickName, value: nickName },
      {
        label: i18n.gender,
        value: i18n[gender === 1 ? 'male' : 'female'],
      },
      { label: i18n.country, value: country || '-' },
      { label: i18n.province, value: province || '-' },
      { label: i18n.city, value: city || '-' },
    ];
  },
});
