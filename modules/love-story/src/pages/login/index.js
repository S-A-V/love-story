Page({
  data: {
    i18n: {
      login: '登录',
      loginSuccess: '登录成功',
      loginFailed: '登录失败',
    },
  },
  async onInfoGet(e) {
    const { userInfo } = e.detail;
    if (!userInfo) {
      return;
    }

    const { i18n } = this.data;
    try {
      await wx.showToast({ title: i18n.loginSuccess });
      wx.navigateTo({ url: '/pages/home/index' });
    } catch (e) {
      await wx.showToast({ title: i18n.loginFailed, icon: 'none' });
    }
  },
});
